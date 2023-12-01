from django.db import models

# Create SellInfo 
class SellInfo(models.Model):
    address = models.CharField(max_length=100)
    description = models.CharField(max_length=255) 
    images = models.ImageField(upload_to="property_images", 
                                 default="property_images/none/NoImage.jpg")
    asking_price = models.DecimalField(max_digits=10, decimal_places=2) 
    shares = models.IntegerField() 

    