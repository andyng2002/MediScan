from django.urls import path
from .views import index

urlpatterns = [
    path('', index),
    path('scanned', index),
    path('medications', index),
]