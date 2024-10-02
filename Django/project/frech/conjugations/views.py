import logging
from django.http import JsonResponse
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.core.exceptions import ValidationError
import json
from .models import Conjugation

logger = logging.getLogger(__name__)

@csrf_exempt
def conjugate_api(request):
    if request.method == 'POST':
        try:
            # Check if the request is AJAX (API call)
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                data = json.loads(request.body)
            else:
                # If it's a form submission, use request.POST
                data = request.POST

            verb = data.get('verb')
            tense = data.get('tense')
            subject = data.get('subject', 'Je')  # Default to 'Je' if not provided

            conjugation = Conjugation(verb=verb, tense=tense, subject=subject)
            
            try:
                conjugation.clean()  # This will check if the verb is in the list
            except ValidationError as e:
                if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                    return JsonResponse({'error': str(e)}, status=400)
                else:
                    return render(request, 'error.html', {'error': str(e)})

            result = conjugation.conjugate()

            response_data = {
                'conjugation': result,
                'verb': verb,
                'tense': tense,
                'subject': subject
            }

            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse(response_data)
            else:
                return render(request, 'result.html', response_data)

        except json.JSONDecodeError:
            return JsonResponse({'error': 'Invalid JSON'}, status=400)
        except Exception as e:
            if request.headers.get('X-Requested-With') == 'XMLHttpRequest':
                return JsonResponse({'error': str(e)}, status=500)
            else:
                return render(request, 'error.html', {'error': str(e)})

    # If it's a GET request, show the form
    return render(request, 'conjugation_form.html')