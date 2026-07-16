from django.contrib import admin
from .models import Patient, TestCategory, Test, Appointment, ContactMessage, Report

# 🌟 Appointment ke liye customized Admin View
class AppointmentAdmin(admin.ModelAdmin):
    # Jo columns tumhe dashboard par table me samne chahiye
    list_display = ('patient_name', 'test_name', 'appointment_date', 'appointment_time', 'status')
    
    # Side me status aur date ke basis par filter lagane ke liye
    list_filter = ('status', 'appointment_date')
    
    # Bina andar click kiye, samne se hi status badal kar save karne ke liye
    list_editable = ('status',)

    # Foreign Key se data nikalne ke custom functions (Kyunki model me direct field nahi hai)
    def patient_name(self, obj):
        return obj.patient.full_name
    patient_name.short_description = 'Patient Name'

    def test_name(self, obj):
        return obj.test.name
    test_name.short_description = 'Test / Package'


# Sabhi models ko register karo (Appointment ko uske naye rules ke sath)
admin.site.register(Patient)
admin.site.register(TestCategory)
admin.site.register(Test)
admin.site.register(ContactMessage)
admin.site.register(Report)
admin.site.register(Appointment, AppointmentAdmin) # <-- Naya customized views register kiya