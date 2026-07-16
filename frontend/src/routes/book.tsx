import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { z } from "zod";
import { CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CATEGORIES, PACKAGES, TESTS, type TestCategory } from "@/lib/site-data";
import { FormField } from "@/components/site/FormField";
import { toast } from "sonner";

export const Route = createFileRoute("/book")({
  validateSearch: (s: Record<string, unknown>) => ({ item: (s.item as string) ?? "" }),
  head: () => ({
    meta: [
      { title: "Book Appointment — MediCore Diagnostics" },
      { name: "description", content: "Book a diagnostic test or health package appointment at MediCore Diagnostics." },
      { property: "og:title", content: "Book Appointment — MediCore Diagnostics" },
      { property: "og:description", content: "Schedule your visit or home sample collection in under a minute." },
      { property: "og:url", content: "/book" },
    ],
    links: [{ rel: "canonical", href: "/book" }],
  }),
  component: BookPage,
});

const GENDERS = ["Male", "Female", "Other", "Prefer not to say"] as const;

const schema = z.object({
  fullName: z.string().trim().min(2, "Enter your full name").max(80),
  age: z.coerce.number({ invalid_type_error: "Enter a valid age" }).int().min(1, "Age must be at least 1").max(120, "Enter a valid age"),
  gender: z.enum(GENDERS, { errorMap: () => ({ message: "Please select a gender" }) }),
  mobile: z.string().trim().regex(/^[+\d][\d\s\-()]{6,19}$/, "Enter a valid mobile number"),
  email: z.string().trim().email("Enter a valid email").max(120),
  address: z.string().trim().min(5, "Please enter your address").max(240),
  category: z.string().min(1, "Please select a category"),
  item: z.string().min(1, "Please select a test or package"),
  date: z.string().min(1, "Please pick a date"),
  time: z.string().min(1, "Please pick a time"),
  notes: z.string().max(500).optional(),
});

type FormState = {
  fullName: string;
  age: string;
  gender: string;
  mobile: string;
  email: string;
  address: string;
  category: string;
  item: string;
  date: string;
  time: string;
  notes: string;
};

function initialCategoryFor(itemSlug: string): string {
  if (!itemSlug) return "";
  const test = TESTS.find((t) => t.slug === itemSlug);
  if (test) return test.category;
  if (PACKAGES.some((p) => p.slug === itemSlug)) return "Health Packages";
  return "";
}

function BookPage() {
  const { item: preset } = Route.useSearch();
  const [done, setDone] = useState(false);
  const [form, setForm] = useState<FormState>({
    fullName: "",
    age: "",
    gender: "",
    mobile: "",
    email: "",
    address: "",
    category: initialCategoryFor(preset),
    item: preset || "",
    date: "",
    time: "",
    notes: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});

  const itemOptions = useMemo(() => {
    if (!form.category) return [];
    if (form.category === "Health Packages") {
      return PACKAGES.map((p) => ({ value: p.slug, label: p.name }));
    }
    return TESTS.filter((t) => t.category === form.category).map((t) => ({ value: t.slug, label: t.name }));
  }, [form.category]);

  function update<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function onSubmit(e: React.FormEvent) {
    
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      const errs: Record<string, string> = {};
      res.error.issues.forEach((i) => (errs[i.path[0] as string] = i.message));
      setErrors(errs);
      toast.error("Please review the form");
      return;
    }
    setErrors({});
    // Payload shape mirrors Django serializer for easy backend wiring later.
    // const payload = {
    //   full_name: form.fullName,
    //   age: Number(form.age),
    //   gender: form.gender,
    //   mobile: form.mobile,
    //   email: form.email,
    //   address: form.address,
    //   test_category: form.category,
    //   test_slug: form.item,
    //   preferred_date: form.date,
    //   preferred_time: form.time,
    //   notes: form.notes || null,
    // };
    const payload = {
    full_name: form.fullName,
    age: Number(form.age),
    gender: form.gender,
    phone: form.mobile,
    email: form.email,
    address: form.address,
    test: itemOptions.find(
    (o)=>o.value===form.item
    )?.label,
    appointment_date: form.date,
    appointment_time: form.time,
    notes: form.notes || "",
};
console.log(payload);
console.log(import.meta.env.VITE_API_URL);
    // Replace with fetch('/api/appointments/', { method: 'POST', body: JSON.stringify(payload) })
    try {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}/appointments/`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  );
  console.log(response.status);
console.log(await response.text());

  if (!response.ok) {
    throw new Error("Failed");
  }

  setDone(true);
  toast.success("Appointment request received!");
} catch (err) {
  toast.error("Something went wrong.");
}
    toast.success("Appointment request received!");
  }

  if (done) {
    return (
      <section className="container-page py-24">
        <div className="max-w-lg mx-auto text-center card-elevated p-10">
          <div className="grid mx-auto h-16 w-16 place-items-center rounded-full bg-primary-soft text-primary">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <h1 className="mt-6 text-2xl font-bold">Appointment confirmed!</h1>
          <p className="mt-2 text-muted-foreground">
            Thank you, {form.fullName.split(" ")[0]}. We've received your request and will call you shortly to confirm the details.
          </p>
          <Button
            className="mt-6 gradient-primary-bg text-primary-foreground"
            onClick={() => {
              setDone(false);
              setForm({
                fullName: "", age: "", gender: "", mobile: "", email: "", address: "",
                category: "", item: "", date: "", time: "", notes: "",
              });
            }}
          >
            Book another
          </Button>
        </div>
      </section>
    );
  }

  return (
    <>
      <section className="gradient-hero-bg">
        <div className="container-page py-14 text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest">Book Appointment</p>
          <h1 className="mt-3 text-4xl sm:text-5xl font-bold">Schedule your visit in seconds.</h1>
          <p className="mt-3 text-muted-foreground">Fill in your details and pick a time that works for you.</p>
        </div>
      </section>

      <section className="container-page py-14">
        <form onSubmit={onSubmit} noValidate className="max-w-2xl mx-auto card-elevated p-6 sm:p-8 grid gap-5">
          <FormField label="Full Name" htmlFor="fullName" required error={errors.fullName}>
            <Input
              id="fullName"
              autoComplete="name"
              value={form.fullName}
              onChange={(e) => update("fullName", e.target.value)}
              placeholder="Jane Doe"
            />
          </FormField>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Age" htmlFor="age" required error={errors.age}>
              <Input
                id="age"
                type="number"
                min={1}
                max={120}
                inputMode="numeric"
                value={form.age}
                onChange={(e) => update("age", e.target.value)}
                placeholder="32"
              />
            </FormField>
            <FormField label="Gender" required error={errors.gender}>
              <Select value={form.gender} onValueChange={(v) => update("gender", v)}>
                <SelectTrigger><SelectValue placeholder="Select gender" /></SelectTrigger>
                <SelectContent>
                  {GENDERS.map((g) => (<SelectItem key={g} value={g}>{g}</SelectItem>))}
                </SelectContent>
              </Select>
            </FormField>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Mobile Number" htmlFor="mobile" required error={errors.mobile}>
              <Input
                id="mobile"
                type="tel"
                autoComplete="tel"
                value={form.mobile}
                onChange={(e) => update("mobile", e.target.value)}
                placeholder="+1 555 010 2040"
              />
            </FormField>
            <FormField label="Email Address" htmlFor="email" required error={errors.email}>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                value={form.email}
                onChange={(e) => update("email", e.target.value)}
                placeholder="jane@example.com"
              />
            </FormField>
          </div>

          <FormField label="Address" htmlFor="address" required error={errors.address}>
            <Textarea
              id="address"
              rows={2}
              autoComplete="street-address"
              value={form.address}
              onChange={(e) => update("address", e.target.value)}
              placeholder="Street, city, state, ZIP"
            />
          </FormField>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Test Category" required error={errors.category}>
              <Select
                value={form.category}
                onValueChange={(v) => {
                  update("category", v as TestCategory);
                  update("item", "");
                }}
              >
                <SelectTrigger><SelectValue placeholder="Select a category" /></SelectTrigger>
                <SelectContent>
                  {CATEGORIES.map((c) => (<SelectItem key={c} value={c}>{c}</SelectItem>))}
                </SelectContent>
              </Select>
            </FormField>
            <FormField
              label="Select Test"
              required
              error={errors.item}
              hint={!form.category ? "Choose a category first" : undefined}
            >
              <Select value={form.item} onValueChange={(v) => update("item", v)} disabled={!form.category}>
                <SelectTrigger><SelectValue placeholder={form.category ? "Choose one" : "Select a category first"} /></SelectTrigger>
                <SelectContent>
                  {itemOptions.map((o) => (<SelectItem key={o.value} value={o.value}>{o.label}</SelectItem>))}
                </SelectContent>
              </Select>
            </FormField>
          </div>

          <div className="grid gap-5 sm:grid-cols-2">
            <FormField label="Preferred Date" htmlFor="date" required error={errors.date}>
              <Input
                id="date"
                type="date"
                value={form.date}
                onChange={(e) => update("date", e.target.value)}
                min={new Date().toISOString().split("T")[0]}
              />
            </FormField>
            <FormField label="Preferred Time" htmlFor="time" required error={errors.time}>
              <Input
                id="time"
                type="time"
                value={form.time}
                onChange={(e) => update("time", e.target.value)}
              />
            </FormField>
          </div>

          <FormField label="Additional Notes" htmlFor="notes" error={errors.notes} hint="Optional — allergies, medications, or special requests.">
            <Textarea
              id="notes"
              rows={4}
              value={form.notes}
              onChange={(e) => update("notes", e.target.value)}
              placeholder="Anything we should know?"
            />
          </FormField>

          <Button type="submit" size="lg" className="gradient-primary-bg text-primary-foreground">
            Submit Appointment Request
          </Button>
          <p className="text-xs text-muted-foreground text-center">
            By submitting, you agree to our Privacy Policy and Terms.
          </p>
        </form>
      </section>
    </>
  );
}
