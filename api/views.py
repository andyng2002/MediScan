from django.shortcuts import render
from rest_framework import generics, status
from .serializers import PrescriptionSerializer
from .models import Prescription
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class PrescriptionView(generics.CreateAPIView):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer