from django.shortcuts import render
from rest_framework import generics, status
from .serializers import PrescriptionSerializer, CreatePrescriptionSerializer
from .models import Prescription
from rest_framework.views import APIView
from rest_framework.response import Response


# Create your views here.
class PrescriptionView(generics.CreateAPIView):
    queryset = Prescription.objects.all()
    serializer_class = PrescriptionSerializer

class CreatePrescriptionView(APIView):
    serializer_class = CreatePrescriptionSerializer
    
    def post(self, request, format=None):
        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            file = serializer.data.get('file')
            queryset = Prescription.objects.filter(file=file)
            if queryset.exists():
                prescription = queryset[0]
                prescription.file = file
                prescription.save(update_fields=['file'])
                return Response(PrescriptionSerializer(prescription).data, status=status.HTTP_200_OK)
            else:
                prescription = Prescription(file=file)
                prescription.save()
                return Response(PrescriptionSerializer(prescription).data, status=status.HTTP_201_CREATED)
        return Response({'Bad Request': 'Invalid data...'}, status=status.HTTP_400_BAD_REQUEST)