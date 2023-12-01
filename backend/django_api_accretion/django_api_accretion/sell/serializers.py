from rest_framework import serializers 
from .models import SellInfo  

class SellInfoSerializer(serializers.ModelSerializer):
    images = serializers.ImageField(max_length=255, allow_empty_file=False, allow_null=True, required=False)
    
    class Meta:
        model = SellInfo 
        fields = ["address", "description", "images", 
                  "asking_price", "shares"] 
        
    def get_pictures_url(self, obj):
        return self.context['request'].build_absolute_uri( obj.images.url ) 
        
        
