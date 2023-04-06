<template>
    <v-card v-intersect="{
        handler: onIntersect,
        options: {
            threshold: [0.95, 1.0]
        }
    }" :id="id" data-tilt :height="height" class="flip-card">
        <div class="flip-card-inner">
            <div class="flip-card-front">
                <slot name="front" />
            </div>
            <div class="flip-card-back">
                <slot name="back" />
            </div>
        </div>
    </v-card>
</template>

<script>
import VanillaTilt from 'vanilla-tilt';
export default {
    props: ['height'],
    beforeMount() {
        this.id = `id-${Math.abs(Math.trunc(Math.random() * 1000000))}`
    },
    mounted() {
        try {
            VanillaTilt.init(document.querySelector(`#${this.id}`), {
                glare: true,
                max: 5,
                "max-glare": 0.5,
                gyroscope: true,
            });
        } catch (error) {

        }
    },
    data: () => ({
        id: null,
    }),
    methods: {
        onIntersect(isIntersecting) {
            const element = document.querySelector(`#${this.id}`)
            if (isIntersecting) {
                element.classList.add('flipped')
            } else {
                element.classList.remove('flipped')
            }
        },
    }
}
</script>

<style scoped>
.flip-card {
    background-color: transparent;
    perspective: 1000px;
}

.flip-card-inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.3s cubic-bezier(.25, .7, .25, 1);
    transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner,
.flip-card.flipped .flip-card-inner {
    transform: rotateY(180deg);
}

.flip-card-front,
.flip-card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    -webkit-backface-visibility: hidden;
    backface-visibility: hidden;
}

.flip-card-back {
    transform: rotateY(180deg);
}
</style>