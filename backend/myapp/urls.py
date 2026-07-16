from django.urls import path
from . import views

urlpatterns = [
    path("appointments/", views.create_appointment),
    path("contact/", views.contact_message),
    path("tests/", views.get_tests),
    path("categories/", views.get_categories),
]