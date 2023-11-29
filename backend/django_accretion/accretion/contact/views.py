from django.shortcuts import render
from .form import InputForm

# Create your views here.
def form_view(request): 
    form = InputForm() 
    context = {"form": form} 
    return render(request, "contact.html", context) 