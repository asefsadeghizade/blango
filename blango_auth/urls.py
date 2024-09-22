from . import views
from django.urls import path, include
from .forms import BlangoRegistrationForm
from django_registration.backends.activation.views import RegistrationView

urlpatterns = [
    path("accounts/", include("django.contrib.auth.urls")),
    path("accounts/profile/", views.profile, name="profile"),
    path(
    "accounts/register/",
    RegistrationView.as_view(form_class=BlangoRegistrationForm),
    name="django_registration_register",
    ),
    path("accounts/", include("django_registration.backends.activation.urls")),
]