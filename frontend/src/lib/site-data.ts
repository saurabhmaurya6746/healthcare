export const SITE = {
  name: "MediCore Diagnostics",
  tagline: "Accurate Diagnostics. Trusted Care.",
  phone: "+1 (555) 010-2040",
  phoneHref: "tel:+15550102040",
  whatsapp: "15550102040",
  email: "hello@medicore-diagnostics.com",
  address: "128 Wellness Avenue, Suite 400, Springfield, IL 62704",
  hours: [
    { day: "Monday – Friday", time: "7:00 AM – 9:00 PM" },
    { day: "Saturday", time: "8:00 AM – 6:00 PM" },
    { day: "Sunday", time: "9:00 AM – 2:00 PM" },
  ],
  socials: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
    linkedin: "https://linkedin.com",
  },
  mapEmbed:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3040.5!2d-89.6501!3d39.7817!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMznCsDQ2JzU0LjEiTiA4OcKwMzknMDAuNCJX!5e0!3m2!1sen!2sus!4v1700000000000",
};

export type Test = {
  slug: string;
  name: string;
  category: TestCategory;
  description: string;
  price: number;
  duration: string;
  report: string;
  preparation: string[];
  faqs: { q: string; a: string }[];
};

export const CATEGORIES = [
  "Blood Tests",
  "Urine Tests",
  "X-Ray",
  "MRI",
  "CT Scan",
  "Ultrasound",
  "ECG",
  "Health Packages",
] as const;

export type TestCategory = (typeof CATEGORIES)[number];

export const TESTS: Test[] = [
  // ===== Blood Tests =====
  {
    slug: "complete-blood-count",
    name: "Complete Blood Count (CBC)",
    category: "Blood Tests",
    description: "Evaluates overall health and detects a variety of disorders including anemia and infection.",
    price: 25,
    duration: "10 min sample",
    report: "Same day",
    preparation: ["No fasting required", "Stay hydrated", "Inform staff of medications"],
    faqs: [
      { q: "Do I need to fast?", a: "No fasting is required for a CBC test." },
      { q: "When will I get results?", a: "Reports are typically ready the same day." },
    ],
  },
  {
    slug: "lipid-profile",
    name: "Lipid Profile",
    category: "Blood Tests",
    description: "Measures cholesterol and triglycerides to assess your risk of heart disease.",
    price: 45,
    duration: "10 min sample",
    report: "Within 24 hours",
    preparation: ["Fast for 9–12 hours", "Water is permitted", "Avoid alcohol 24h prior"],
    faqs: [{ q: "Is fasting required?", a: "Yes, fast for 9–12 hours before the test." }],
  },
  {
    slug: "hba1c",
    name: "HbA1c (Diabetes)",
    category: "Blood Tests",
    description: "Reflects average blood sugar over the past 2–3 months. Essential for diabetes management.",
    price: 35,
    duration: "10 min sample",
    report: "Same day",
    preparation: ["No fasting required"],
    faqs: [{ q: "How often should I test?", a: "Every 3–6 months if diabetic." }],
  },
  {
    slug: "thyroid-profile",
    name: "Thyroid Profile (T3, T4, TSH)",
    category: "Blood Tests",
    description: "Comprehensive thyroid function panel for accurate diagnosis of thyroid disorders.",
    price: 55,
    duration: "10 min sample",
    report: "Within 24 hours",
    preparation: ["Take test in the morning", "Inform staff of thyroid medications"],
    faqs: [{ q: "When is the best time?", a: "Morning tests give the most accurate results." }],
  },
  {
    slug: "vitamin-d",
    name: "Vitamin D (25-OH)",
    category: "Blood Tests",
    description: "Assesses vitamin D levels critical for bone health, immunity, and general wellbeing.",
    price: 60,
    duration: "10 min sample",
    report: "Within 48 hours",
    preparation: ["No fasting required"],
    faqs: [{ q: "Why check vitamin D?", a: "Low levels are linked to fatigue and weak bones." }],
  },
  {
    slug: "liver-function",
    name: "Liver Function Test",
    category: "Blood Tests",
    description: "Assesses liver enzymes and proteins to evaluate liver health.",
    price: 50,
    duration: "10 min sample",
    report: "Same day",
    preparation: ["Fast for 8 hours", "Avoid alcohol 24h prior"],
    faqs: [{ q: "Why test?", a: "Useful for detecting hepatitis, fatty liver and more." }],
  },
  {
    slug: "kidney-function",
    name: "Kidney Function Test",
    category: "Blood Tests",
    description: "Evaluates kidney health via creatinine, urea, and electrolytes.",
    price: 50,
    duration: "10 min sample",
    report: "Same day",
    preparation: ["Stay hydrated", "No specific fasting needed"],
    faqs: [{ q: "Any prep?", a: "Just stay well hydrated." }],
  },

  // ===== Urine Tests =====
  {
    slug: "urine-routine",
    name: "Urine Routine & Microscopy",
    category: "Urine Tests",
    description: "Screens for urinary tract infections, kidney issues, and metabolic disorders.",
    price: 15,
    duration: "5 min sample",
    report: "Same day",
    preparation: ["Collect a mid-stream sample", "Use the sterile container provided"],
    faqs: [{ q: "How is the sample collected?", a: "A clean-catch mid-stream sample in a sterile container." }],
  },
  {
    slug: "urine-culture",
    name: "Urine Culture & Sensitivity",
    category: "Urine Tests",
    description: "Identifies bacterial infections and the antibiotics most likely to treat them.",
    price: 40,
    duration: "5 min sample",
    report: "48–72 hours",
    preparation: ["Collect a mid-stream sample", "Avoid antibiotics 24h prior if possible"],
    faqs: [{ q: "Why does it take longer?", a: "Bacteria need time to grow in the culture medium." }],
  },
  {
    slug: "urine-microalbumin",
    name: "Urine Microalbumin",
    category: "Urine Tests",
    description: "Detects early signs of kidney damage, especially in diabetic patients.",
    price: 30,
    duration: "5 min sample",
    report: "Within 24 hours",
    preparation: ["No specific preparation required"],
    faqs: [{ q: "Who should test?", a: "Recommended annually for diabetics and hypertensives." }],
  },

  // ===== X-Ray =====
  {
    slug: "chest-xray",
    name: "Chest X-Ray",
    category: "X-Ray",
    description: "Digital chest imaging to detect infections, lung conditions and cardiac silhouette.",
    price: 40,
    duration: "15 min",
    report: "Within 2 hours",
    preparation: ["Wear loose clothing", "Remove metal accessories"],
    faqs: [{ q: "Is it safe?", a: "Yes, exposure is minimal and controlled." }],
  },
  {
    slug: "spine-xray",
    name: "Spine X-Ray",
    category: "X-Ray",
    description: "Imaging of cervical, thoracic or lumbar spine to evaluate pain, injury or curvature.",
    price: 55,
    duration: "15–20 min",
    report: "Within 2 hours",
    preparation: ["Remove metal accessories", "Inform staff if pregnant"],
    faqs: [{ q: "How long does it take?", a: "About 15–20 minutes depending on views required." }],
  },
  {
    slug: "limb-xray",
    name: "Limb / Joint X-Ray",
    category: "X-Ray",
    description: "Detailed imaging of arms, legs, hands, feet or joints for fractures and arthritis.",
    price: 45,
    duration: "15 min",
    report: "Within 2 hours",
    preparation: ["Remove jewellery from the area", "Wear comfortable clothing"],
    faqs: [{ q: "Do I need a referral?", a: "A doctor's prescription is recommended but not mandatory." }],
  },

  // ===== MRI =====
  {
    slug: "mri-brain",
    name: "MRI Brain (Plain)",
    category: "MRI",
    description: "High-resolution imaging of the brain to evaluate headaches, stroke, tumors and more.",
    price: 320,
    duration: "30–45 min",
    report: "Within 24 hours",
    preparation: ["Remove all metal objects", "Inform staff of implants or claustrophobia"],
    faqs: [{ q: "Is it painful?", a: "No, but you'll hear loud tapping — earplugs are provided." }],
  },
  {
    slug: "mri-spine",
    name: "MRI Spine (Lumbar)",
    category: "MRI",
    description: "Detailed spine imaging for disc prolapse, nerve compression and back pain evaluation.",
    price: 340,
    duration: "30–45 min",
    report: "Within 24 hours",
    preparation: ["Remove metal objects", "Wear the gown provided"],
    faqs: [{ q: "Any contrast?", a: "Most spine MRIs are done without contrast unless specified." }],
  },
  {
    slug: "mri-knee",
    name: "MRI Knee Joint",
    category: "MRI",
    description: "Evaluates ligaments, meniscus and cartilage for sports injuries and joint pain.",
    price: 300,
    duration: "25–35 min",
    report: "Within 24 hours",
    preparation: ["Remove metal accessories", "Inform staff of any joint implants"],
    faqs: [{ q: "Can I move?", a: "Please stay still — movement blurs the images." }],
  },

  // ===== CT Scan =====
  {
    slug: "ct-brain",
    name: "CT Scan Brain (Plain)",
    category: "CT Scan",
    description: "Fast imaging of the brain to rule out bleeds, trauma, and acute neurological issues.",
    price: 180,
    duration: "10–15 min",
    report: "Within 4 hours",
    preparation: ["Remove hairpins and metal", "Fast for 4 hours if contrast is planned"],
    faqs: [{ q: "How fast are results?", a: "Emergency reports can be issued within an hour." }],
  },
  {
    slug: "ct-chest",
    name: "CT Scan Chest (HRCT)",
    category: "CT Scan",
    description: "High-resolution imaging of the lungs for infection, fibrosis and nodule evaluation.",
    price: 220,
    duration: "15 min",
    report: "Within 4 hours",
    preparation: ["Remove metal accessories", "Follow breath-hold instructions"],
    faqs: [{ q: "Is contrast needed?", a: "HRCT is typically done without contrast." }],
  },
  {
    slug: "ct-abdomen",
    name: "CT Scan Abdomen & Pelvis",
    category: "CT Scan",
    description: "Comprehensive abdominal imaging for pain, stones, tumors and organ evaluation.",
    price: 260,
    duration: "20 min",
    report: "Within 6 hours",
    preparation: ["Fast for 4–6 hours", "You may be asked to drink oral contrast"],
    faqs: [{ q: "Any side effects?", a: "Contrast may cause a warm sensation, which is normal." }],
  },

  // ===== Ultrasound =====
  {
    slug: "usg-abdomen",
    name: "Ultrasound Abdomen",
    category: "Ultrasound",
    description: "Non-invasive imaging of liver, gallbladder, kidneys, pancreas and spleen.",
    price: 75,
    duration: "20 min",
    report: "Within 2 hours",
    preparation: ["Fast for 6 hours", "Drink 1L water 1 hour before if pelvic scan"],
    faqs: [{ q: "Is it painful?", a: "No — only mild pressure from the probe." }],
  },
  {
    slug: "usg-pelvis",
    name: "Ultrasound Pelvis",
    category: "Ultrasound",
    description: "Evaluates the uterus, ovaries, bladder and pelvic organs.",
    price: 80,
    duration: "20 min",
    report: "Within 2 hours",
    preparation: ["Drink 1L water 1 hour prior", "Do not empty bladder before scan"],
    faqs: [{ q: "Is a full bladder needed?", a: "Yes — it helps visualize pelvic organs clearly." }],
  },
  {
    slug: "usg-obstetric",
    name: "Obstetric Ultrasound",
    category: "Ultrasound",
    description: "Antenatal scan for pregnancy monitoring, fetal growth and wellbeing.",
    price: 90,
    duration: "25 min",
    report: "Same day",
    preparation: ["Full bladder in early pregnancy", "Wear loose clothing"],
    faqs: [{ q: "Is it safe for baby?", a: "Yes, ultrasound uses sound waves, not radiation." }],
  },

  // ===== ECG =====
  {
    slug: "ecg-resting",
    name: "Resting ECG (12-lead)",
    category: "ECG",
    description: "Records electrical activity of the heart to detect rhythm and conduction issues.",
    price: 25,
    duration: "10 min",
    report: "Same day",
    preparation: ["Wear a loose top", "Avoid oily skin creams on the chest"],
    faqs: [{ q: "Is it painful?", a: "Not at all — electrodes are simply placed on the skin." }],
  },
  {
    slug: "ecg-treadmill",
    name: "Treadmill Test (TMT)",
    category: "ECG",
    description: "Exercise stress test to evaluate coronary artery disease and cardiac fitness.",
    price: 120,
    duration: "30–45 min",
    report: "Within 24 hours",
    preparation: ["Wear sports shoes and comfortable clothing", "Light meal 2 hours before"],
    faqs: [{ q: "What if I feel unwell?", a: "The test is stopped immediately and a cardiologist is on standby." }],
  },
  {
    slug: "ecg-holter",
    name: "Holter Monitoring (24h)",
    category: "ECG",
    description: "24-hour continuous ECG recording to detect intermittent arrhythmias.",
    price: 180,
    duration: "24 hours wear",
    report: "Within 48 hours",
    preparation: ["Bathe before fitting the monitor", "Continue your normal daily routine"],
    faqs: [{ q: "Can I shower?", a: "Not while the monitor is attached." }],
  },
];

export type Package = {
  slug: string;
  name: string;
  description: string;
  price: number;
  originalPrice: number;
  duration: string;
  report: string;
  includes: string[];
  popular?: boolean;
};

export const PACKAGES: Package[] = [
  {
    slug: "essential-wellness",
    name: "Essential Wellness",
    description: "A great starting point to check your baseline health.",
    price: 89,
    originalPrice: 140,
    duration: "20 min sample",
    report: "Within 24 hours",
    includes: ["CBC", "Blood Sugar (Fasting)", "Lipid Profile", "Urine Routine", "Doctor Consultation"],
  },
  {
    slug: "comprehensive-full-body",
    name: "Comprehensive Full Body",
    description: "Our most popular 60+ parameter deep health assessment.",
    price: 189,
    originalPrice: 320,
    duration: "30 min sample",
    report: "Within 48 hours",
    includes: [
      "CBC + ESR",
      "Lipid Profile",
      "Liver & Kidney Function",
      "Thyroid Profile",
      "HbA1c",
      "Vitamin D & B12",
      "Urine Analysis",
      "ECG",
    ],
    popular: true,
  },
  {
    slug: "cardiac-care",
    name: "Cardiac Care",
    description: "Focused screening for heart health and risk assessment.",
    price: 149,
    originalPrice: 240,
    duration: "25 min sample",
    report: "Within 24 hours",
    includes: ["Lipid Profile", "ECG", "Blood Pressure", "Blood Sugar", "Cardiac Risk Markers"],
  },
];

export const TESTIMONIALS = [
  {
    name: "Sarah Mitchell",
    role: "Patient",
    quote:
      "The staff was warm and professional. Reports came in faster than promised and the online portal made things easy.",
    rating: 5,
  },
  {
    name: "Dr. Anil Verma",
    role: "Referring Physician",
    quote:
      "Accuracy and turnaround at MediCore have been consistently excellent. My go-to lab for complex panels.",
    rating: 5,
  },
  {
    name: "James O'Connor",
    role: "Patient",
    quote:
      "Booked a full body check-up online in minutes. Facility feels clean, modern and well-organized.",
    rating: 5,
  },
];

export const FAQS = [
  { q: "Do I need an appointment?", a: "Walk-ins are welcome, but booking online guarantees a slot and reduces wait time." },
  { q: "How do I receive my reports?", a: "Reports are delivered via email and are available in your secure online portal. Hard copies can be collected on request." },
  { q: "Do you offer home sample collection?", a: "Yes, home collection is available for most blood tests within our service area at no extra cost for packages." },
  { q: "Are your tests covered by insurance?", a: "We work with most major insurance providers. Please contact us with your provider details before booking." },
  { q: "Are your laboratories accredited?", a: "Yes. Our labs are accredited by leading international bodies and follow strict quality control protocols." },
  { q: "Can I reschedule my appointment?", a: "You can reschedule up to 2 hours before your slot by calling us or replying to your confirmation email." },
];
