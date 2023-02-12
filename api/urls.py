from django.urls import path
from .views import PrescriptionView

urlpatterns = [
    path('scan/', PrescriptionView.as_view()),
]
