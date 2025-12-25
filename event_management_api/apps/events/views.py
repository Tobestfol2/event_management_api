from django.shortcuts import render
from .models import Event

def event_list(request):
    events = Event.objects.filter(start_date__gte='2025-12-01').order_by('start_date')
    return render(request, 'events/event_list.html', {'events': events})