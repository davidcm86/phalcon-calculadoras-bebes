<div class="row">
    <div class="col-sm-12 bg-gray-light aligner aligner--centerHoritzontal aligner--centerVertical">
        {% if rutaHome is defined %}
            <a href="{{ rutaHome }}">{{ image("img/logo-bebe.png", "alt": "Logo bebé calculadora", "width": "102") }}</a>
        {% else %}
            {{ image("img/logo-bebe.png", "alt": "Logo bebé calculadora", "width": "102") }}
        {% endif %}
    </div>
</div>