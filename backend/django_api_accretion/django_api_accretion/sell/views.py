from rest_framework.response import Response 
from rest_framework import generics
from rest_framework.parsers import MultiPartParser, FormParser 
from .models import PropertyInfo 
from .serializers import PropertyInfoSerializer   

class SellerUpload(generics.CreateAPIView, generics.ListAPIView):
    queryset = PropertyInfo.objects.all()
    parser_classes = (MultiPartParser, FormParser)
    serializer_class = PropertyInfoSerializer 
    
    # # override GET with custom method 
    # def get(self,request): 
    #     queryset = PropertyInfo.objects.all() 
    #     serializer = PropertyInfoSerializer(queryset, many=True) 
    #     return Response(serializer.data)
    
    