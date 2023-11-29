from django import forms 

class InputForm(forms.Form): 
    name = forms.CharField(required=True, max_length=50, label="name") 
    email = forms.EmailField(required=True, max_length=100, label="email") 
    phone = forms.IntegerField(label="phone_number") 
    message = forms.CharField(widget=forms.Textarea, label="message") #use Textare for multiline message
    