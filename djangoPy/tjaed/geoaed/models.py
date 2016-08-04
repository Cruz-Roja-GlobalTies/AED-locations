from django.db import models

# Create your models here.

class AED(models.Model):
    latitude = models.FloatField()
    longitude = models.FloatField()
    detail = models.CharField(max_length = 200)
