from django.shortcuts import render
from .trade import TradeForm

# Create your views here.
def MakeTrade(request): 
    form = TradeForm 
    context = {"form": form}
    
    return render(request, "trade.html", context) 