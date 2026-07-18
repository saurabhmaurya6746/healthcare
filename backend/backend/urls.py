from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static
from django.http import JsonResponse

# Root view function
def home(request):
    return JsonResponse({
        "message": "Healthcare API is running!",
        "endpoints": {
            "appointments": "/api/appointments/",
            "contact": "/api/contact/",
            "tests": "/api/tests/",
            "categories": "/api/categories/",
            "admin": "/admin/"
        }
    })

urlpatterns = [
    path("", home, name="home"),  # 👈 Root URL ke liye
    path("admin/", admin.site.urls),
    path("api/", include("myapp.urls")),
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
