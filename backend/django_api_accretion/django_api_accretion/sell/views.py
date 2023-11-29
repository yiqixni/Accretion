from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework import generics
from .models import SellInfo 
from .serializers import SellInfoSerializer   

class Sell(generics.CreateAPIView):
    queryset = SellInfo.objects.all() 
    serializer_class = SellInfoSerializer 
    # define GET method that returns all SellInfo objects 
    def get(self,request): 
        queryset = SellInfo.objects.all() 
        serializer = SellInfoSerializer(queryset, many=True) 
        return Response(serializer.data)
    
    
    