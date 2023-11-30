# from django.shortcuts import render
from rest_framework.response import Response 
from rest_framework import status 
from rest_framework.decorators import api_view 
from .serializers import ContactInfoSerializer  

# Create your views here.
@api_view(["GET", "POST"]) 
def ContactUs(request):
    if request.method == "GET":
        return Response({"message": "Call us at 6172332293, or email us at support@accretion.life"
                         }, status=status.HTTP_200_OK)
    
    if request.method == "POST":
        serialized_contact_info = ContactInfoSerializer(data=request.data)
        serialized_contact_info.is_valid(raise_exception=True)  
        serialized_contact_info.save()  
        clientName = serialized_contact_info.data.get("name")
        return Response(
            {"message": f"Hi {clientName}, your message received!"}, 
            status=status.HTTP_200_OK)