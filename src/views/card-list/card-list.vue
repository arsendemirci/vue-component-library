<template>
    <div>
        <h1>Card List Demo</h1>
        <div class="main-container">
            <div class="toolbar">
                <div class="search">
                    <input type="text" v-model="query" />
                    <button type="button" class="button ripple">
                        <fa icon="fa-solid fa-magnifying-glass" />
                    </button>
                </div>
                <div class="sort">
                    <button type="button" class="button ripple" @click="sortList">
                        <label>Sort By Title</label>
                        <fa v-if="sort" icon="fa-solid fa-arrow-down-a-z" />
                        <fa v-else icon="fa-solid fa-arrow-up-a-z" />
                    </button>
                </div>
                <div class="add">
                    <button type="button" class="button ripple" @click="createCard">
                        <label>Add Card</label>
                        <fa icon="fa-solid fa-plus" />
                    </button>
                </div>
            </div>

            <TransitionGroup class="card-list" tag="ol" name="slide-in" :style="{ '--total': list.length }">

                <li v-for="(c, index) in list" :style="{ 'z-index': list.length - index, '--i': index }" :key="index + '_i'"
                    :data-index="index">
                    <div class="card-container" @mouseenter="fnAnim($event, true)" @mouseleave="fnAnim($event, false)">
                        <!-- <div class="card-wrap card-alt">
                <div class="card card-alt">
                    <h2>Alternative Card</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi repellat quo tenetur fuga
                        necessitatibus
                        eius
                        ut explicabo consectetur dolores sit.</p>
                </div>
            </div> -->


                        <div class="card-wrap">
                            <div class="card card-main">
                                <h2>{{ c.title }}</h2>
                                <p>{{ c.text }}</p>
                            </div>

                        </div>
                    </div>
                </li>
            </TransitionGroup>
        </div>
    </div>
</template>
 
<script>
import { ref, computed } from 'vue'
export default {
    setup() {
        const titles = ['Carbon', 'Darwin', 'Curl', 'Epigram', 'JAVA', 'Kotlin', 'BASIC', 'Erlang', 'Delphi', 'Ruby', 'Pascal', 'Python', 'MATLAB', 'COBOL', 'JADE', 'UNITY', 'RAPID', 'PEARL', 'Fortran', 'TypeScript']
        const list = ref([{ title: "CSS", text: "Lorem ipsum dolor sit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad." },
        { title: "JavaScript", text: "Lorem ipsum dolor sit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad." },
        { title: "VueJS", text: "Lorem ipsum dolor sit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad." },
        { title: "HTML", text: "Lorem ipsum dolor sit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad." },
        { title: "SCSS", text: "Lorem ipsum dolor sit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad." },
        { title: "React", text: "Lorem ipsum dolor sit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad." },
        { title: "Angular", text: "Lorem ipsum dolor sit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad." }
        ]);
        const query = ref('')
        const sort = ref(false)

        // const computedList = computed(() => {
        //     console.log('computed triggered');
        //     return list.value.filter((item) => item.title.toLowerCase().includes(query.value)).sort((a, b) => {
        //         if (a.title > b.title)
        //             return sort.value ? -1 : 1
        //         else if (a.title < b.title) {
        //             return sort.value ? 1 : -1
        //         }
        //     })
        // })

        function fnAnim(el, isEnter) {
            console.log(el.target, isEnter);
            if (isEnter) {
                el.target.classList.add("in");
            } else {
                el.target.classList.add("out");
            }

            requestAnimationFrame((frStart) => {
                console.log(frStart);
            });
        }
        function sortList() {
            console.log('sort list')
            this.sort = !this.sort;
        }
        function createCard() {
            this.list.push({ title: titles[Math.floor(Math.random() * titles.length)], text: "Lorem ipsum dolor sit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad." })
        }
        // function onBeforeEnter(el) {
        //     el.style.opacity = 0;
        //     el.style.transform = scale(0.5, 0.5);
        // }

        // function onEnter(el, done) {
        //     gsap.to(el, {
        //         opacity: 1,
        //         transform: scale(1, 1),
        //         delay: el.dataset.index * 0.15,
        //         onComplete: done
        //     })
        // }

        // function onLeave(el, done) {
        //     gsap.to(el, {
        //         opacity: 0,
        //         delay: el.dataset.index * 0.15,
        //         transform: scale(0.5, 0.5),
        //         onComplete: done
        //     })
        // }
        return { list, fnAnim, query, sort, sortList, createCard }
    }
}
</script>
 
<style lang="scss" scoped>
input,
button {
    padding-left: 10px;
    padding-right: 10px;
    height: 40px;
}

.button {

    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;


    cursor: pointer;
    color: white;
    background-color: #f69c3b;
    border: solid 1px gray;

    &:hover {
        background-color: #d57917;
    }
}

.main-container {
    background-color: cornsilk;
    padding: 20px;
    height: calc(100vh - 72px);
    overflow: auto;

    .toolbar {
        display: flex;
        align-items: center;
        gap: 15px;
        margin-bottom: 15px;
        padding-bottom: 15px;
        border-bottom: 1px solid rgba(128, 128, 128, 0.493);

    }

    .search {
        width: 340px;
        display: flex;
        align-items: center;

        button {
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
        }

        input {
            width: 310px;
            border-radius: 0;
            border: solid 1px gray;
            transition: all .2s ease;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;

            color: #495057;
            background: #ffffff;
            border: 1px solid #ced4da;
            transition: background-color 0.2s, color 0.2s, border-color 0.2s, box-shadow 0.2s;
            appearance: none;

            &:hover {
                border-color: #f69c3b;
            }

            &:focus {
                outline: 0 none;
                outline-offset: 0;
                box-shadow: 0 0 0 0.2rem #ecc689;
                border-color: #f69c3b;
            }


        }


    }

    .sort {
        button {
            border-radius: 6px;
            display: flex;
            justify-content: center;
            align-items: center;
            gap: 15px;
        }
    }

    .card-list {
        position: relative;
        list-style-type: none;

        li {
            position: relative;
            margin-bottom: 15px;
            float: left;
            width: 310px;
            margin-right: 15px;

            .card-container {
                cursor: pointer;

                // &.in {
                //     .card-main {
                //         animation: cardHoverIn .4s ease-in-out forwards;
                //         // transform: rotateX(10deg) rotateY(20deg) rotateZ(-5deg) translateZ(0px) translateX(-10px);
                //         // box-shadow: -10px 10px 30px rgba(128, 128, 128, 0.527);
                //     }

                //     .card-alt {
                //         opacity: 1;
                //         transform: rotateY(-30deg) translateX(40px);
                //         box-shadow: 10px 10px 30px rgba(128, 128, 128, 0.527);
                //     }
                // }

                &:hover {
                    .card-main {
                        animation: cardHover .4s ease-in-out forwards;
                        // transform: rotateX(10deg) rotateY(20deg) rotateZ(-5deg) translateZ(0px) translateX(-10px);
                        // box-shadow: -10px 10px 30px rgba(128, 128, 128, 0.527);
                    }

                    .card-main-alt {
                        transform: skewX(4deg) rotateX(10deg) rotateY(20deg) rotateZ(-5deg) translateZ(0px) translateX(0px);
                        box-shadow: -10px 10px 30px rgba(128, 128, 128, 0.527);
                    }

                    .card-alt {
                        opacity: 1;
                        transform: rotateY(-30deg) translateX(40px);
                        box-shadow: 10px 10px 30px rgba(128, 128, 128, 0.527);
                    }
                }

                .card-wrap {
                    perspective: 600px;
                    perspective-origin: left;
                    -webkit-perspective-origin-y: top;
                    -ms-perspective-origin-x: left;

                    &.card-alt {
                        perspective-origin: right;
                        -webkit-perspective-origin-y: top;
                        -ms-perspective-origin-x: right;
                    }

                    .card {

                        h2 {
                            margin-bottom: 10px;
                        }

                        background-color: aliceblue;
                        padding: 16px;
                        border-radius: 8px;
                        border: solid 1px gray;
                        transition:all .2s ease-in;

                        &.card-alt {
                            opacity: 0;
                        }

                    }
                }
            }
        }


    }
}

.slide-in {

    &-move {
        transition: opacity .4s linear, transform .4s cubic-bezier(.5, 0, .7, .4);
    }

    &-leave-active {
        transition: opacity .4s linear, transform .4s cubic-bezier(.5, 0, .7, .4); //cubic-bezier(.7,0,.7,1); 
        transition-delay: calc(0.15s * (var(--total) - var(--i)));
    }

    &-enter-active {
        transition: opacity .5s linear, transform .5s cubic-bezier(.2, .5, .1, 1);
        transition-delay: calc(0.15s * var(--i));
    }

    &-enter-from,
    &-leave-to {
        opacity: 0;
    }

    &-enter-from {
        transform: translateX(-1em);
    }

    &-leave-to {
        transform: translateX(1em);
    }

}





@keyframes cardHover {
    0% {
        transform: rotateX(0) rotateY(0) rotateZ(0) translateZ(0px) translateX(0px);
    }

    30% {
        transform: rotateX(5deg) rotateY(5deg) rotateZ(2deg) translateZ(30px) translateX(0px);
        box-shadow: 0 0 10px rgba(128, 128, 128, 0.727);
    }

    100% {
        transform: rotateX(10deg) rotateY(20deg) rotateZ(-5deg) translateZ(0px) translateX(0px);
        box-shadow: -10px 10px 30px rgba(128, 128, 128, 0.527);
    }
}

/* Ripple effect */
.ripple {
    background-position: center;
    transition: background 0.4s;
}

.ripple:hover {
    background: #f5aa47bd radial-gradient(circle, transparent 1%, #f5ad47 1%) center/15000%;
}

.ripple:active {
    background-color: #f7b76e;
    background-size: 100%;
    transition: background 0s;
}
</style>