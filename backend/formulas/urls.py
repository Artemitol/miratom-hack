from rest_framework import routers

from formulas.views import FormulasViewSet

router = routers.SimpleRouter()
router.register(r'', FormulasViewSet, basename='formulas')
urlpatterns = router.urls