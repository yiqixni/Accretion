from django import forms 


class TradeForm(forms.Form): 
    trade_choice = [
        ("buy", "buy"), 
        ("sell", "sell"), 
    ]

    action = forms.ChoiceField(
        choices=trade_choice, 
        widget=forms.RadioSelect, 
        label=""
    )
    price = forms.FloatField(required=True, label="price") 
    quantity = forms.IntegerField(required=True, label="quantity") 
    
