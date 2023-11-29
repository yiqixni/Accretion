from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework import status
from rest_framework.decorators import api_view
from .serializers import SellInfoSerializer 
from .models import SellInfo    

# Create function-based views here.
@api_view(["GET", "POST"])
def sell(request):
    if request.method == "GET":
        listings = SellInfo.objects.all()
        serialized_listings = SellInfoSerializer(listings, many=True)  
        
        return Response(serialized_listings.data, status=status.HTTP_200_OK)
    if request.method == "POST": 
        serialized_listing = SellInfoSerializer(data=request.data) 
        serialized_listing.is_valid(raise_exception=True) 
        serialized_listing.save() 

        return Response(serialized_listing.data, status=status.HTTP_200_OK)
