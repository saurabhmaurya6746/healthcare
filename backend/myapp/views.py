from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status

from .models import TestCategory, Test, Appointment, ContactMessage
from .serializers import (
    TestCategorySerializer,
    TestSerializer,
    AppointmentSerializer,
    ContactMessageSerializer,
)


@api_view(["GET"])
def get_categories(request):
    categories = TestCategory.objects.all()
    serializer = TestCategorySerializer(categories, many=True)
    return Response(serializer.data)


@api_view(["GET"])
def get_tests(request):
    tests = Test.objects.all()
    serializer = TestSerializer(tests, many=True)
    return Response(serializer.data)

from .models import Patient, Appointment, Test

@api_view(["POST"])
def create_appointment(request):
    data = request.data
    test_name = data.get("test")

    # 1. Pehle check karein ki wo Test database me exist karta hai ya nahi
    try:
        test = Test.objects.get(name=test_name)
    except Test.DoesNotExist:
        return Response(
            {"error": f"Test '{test_name}' database me nahi mila. Pehle Admin se ise add karein."},
            status=status.HTTP_400_BAD_REQUEST
        )

    # 2. Gender validation fix (taaki server accept kare)
    gender = data.get("gender")
    if gender not in ["Male", "Female", "Other"]:
        gender = "Other" # Agar 'Prefer not to say' hai toh use 'Other' me map kar rahe hain

    # 3. Patient create karein
    patient = Patient.objects.create(
        full_name=data.get("full_name"),
        age=data.get("age"),
        gender=gender,
        phone=data.get("phone"),
        email=data.get("email"),
        address=data.get("address"),
    )

    # 4. Appointment create karein
    appointment = Appointment.objects.create(
        patient=patient,
        test=test,
        appointment_date=data.get("appointment_date"),
        appointment_time=data.get("appointment_time"),
        notes=data.get("notes"),
    )

    return Response(
        {"message": "Appointment Booked Successfully"},
        status=status.HTTP_201_CREATED
    )

@api_view(["POST"])
def contact_message(request):

    data = request.data

    ContactMessage.objects.create(
        name=data.get("name"),
        phone=data.get("phone"),
        email=data.get("email"),
        subject=data.get("subject"),
        message=data.get("message"),
    )

    return Response(
        {
            "message": "Message Sent Successfully"
        },
        status=201,
    )