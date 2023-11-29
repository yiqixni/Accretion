from rest_framework import serializers 
from .models import SellInfo  

class SellInfoSerializer(serializers.ModelSerializer):
    class Meta:
        model = SellInfo 
        fields = ["address", "description", "pictures", 
                  "asking_price", "shares"] 
        
        
