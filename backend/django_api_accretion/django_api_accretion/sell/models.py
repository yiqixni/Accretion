from django.db import models

# Create SellInfo 
class PropertyInfo(models.Model):
    address = models.CharField(max_length=100)
    description = models.CharField(max_length=255) 
    asking_price = models.DecimalField(max_digits=10, decimal_places=2) 
    shares = models.IntegerField() 
    
class PropertyImage(models.Model):
    property_info = models.ForeignKey(PropertyInfo, 
                                      on_delete=models.CASCADE, 
                                      related_name="images")
    image = models.ImageField(upload_to="property_images/") 

    

    