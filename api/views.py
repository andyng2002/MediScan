from django.shortcuts import render
from rest_framework import generics
from .serializers import PrescriptionSerializer
from .models import Prescription

# Create your views here.
class PrescriptionView(generics.CreateAPIView):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer