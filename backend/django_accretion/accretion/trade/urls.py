from django.urls import path 
from . import views 

urlpatterns = [
    path('', views.MakeTrade, name="trade"), 
]