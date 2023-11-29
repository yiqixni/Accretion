from django.db import models

# Create SellInfo 
class SellInfo(models.Model):
    address = models.CharField(max_length=100)
    description = models.CharField(max_length=255) 
    # pictures = models.ImageField(upload_to="sell_pictures")
    pictures = models.CharField(max_length=255) 
    asking_price = models.DecimalField(max_digits=10, decimal_places=2) 
    shares = models.IntegerField() 

    