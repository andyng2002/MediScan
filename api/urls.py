from django.urls import path
from .views import PrescriptionView

urlpatterns = [
    path('home/', PrescriptionView.as_view()),
]
