from django.contrib import admin
from .models import Category, Venue, Event

@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'slug']
    prepopulated_fields = {'slug': ('name',)}

@admin.register(Venue)
class VenueAdmin(admin.ModelAdmin):
    list_display = ['name', 'city', 'capacity']
    search_fields = ['name', 'address']

@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ['title', 'organizer', 'start_date', 'venue', 'is_free']
    list_filter = ['category', 'start_date', 'is_free']
    search_fields = ['title', 'description']
    date_hierarchy = 'start_date'