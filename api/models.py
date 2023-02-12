from django.db import models

# Create your models here.
class Prescription(models.Model):
    file = models.FileField()
    name = models.CharField(max_length=100, default='name', )
    dosage = models.CharField(max_length=50, default='default')
    frequency = models.CharField(max_length=50, default='frequency')
    created_at = models.DateTimeField(auto_now_add=True)