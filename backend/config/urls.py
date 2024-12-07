from django.contrib import admin
from django.urls import path, include
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
    openapi.Info(
        title="API",  # Название вашего API
        default_version='v1',
        description="API Documentation",
        license=openapi.License(name="MIT License"),
    ),
    public=True,
)

api_version = "v1"
api_urls = f"api/{api_version}/"
urlpatterns = [
    path('admin/', admin.site.urls),
    path(f'{api_urls}authentication/', include('authentication.urls')),
    path('swagger/', schema_view.as_view()),  # Документация Swagger

]