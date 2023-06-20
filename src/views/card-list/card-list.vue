<template>
    <div>
        <h1>Card List Demo</h1>
        <div class="main-container">
            <div class="search">
                <input type="text" />
                <button type="button" class="ripple">
                    <fa icon="fa-solid fa-magnifying-glass" />
                </button>
            </div>

            <ol class="card-list">
                <li v-for="(c, index) in cards" :style="{ 'z-index': cards.length - index }">
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
            </ol>
        </div>
    </div>
</template>
 
<script>
import { ref } from 'vue'
export default {
    setup() {
        const cards = ref([{ title: "CSS", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad. Suscipit beatae minima optio?" },
        { title: "JavaScript", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad. Suscipit beatae minima optio?" },
        { title: "VueJS", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad. Suscipit beatae minima optio?" },
        { title: "HTML", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad. Suscipit beatae minima optio?" },
        { title: "SCSS", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad. Suscipit beatae minima optio?" },
        { title: "React", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad. Suscipit beatae minima optio?" },
        { title: "Angular", text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dicta repellat itaque, corrupti facilis sapiente ipsa perferendis quasi inventore sint blanditiis reiciendis laborum aut qui numquam ad. Suscipit beatae minima optio?" }
        ])

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
        return { cards, fnAnim }
    }
}
</script>
 
<style lang="scss" scoped>
.main-container {
    background-color: cornsilk;
    padding: 20px;
    height: calc(100vh - 200px);
    overflow: auto;

    .search {
        width: 340px;
        display: flex;
        align-items: center;
        margin-bottom: 15px;

        button {
            font-size: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            height: 100%;
            padding: 12px;
            border: solid 1px gray;
            border-top-right-radius: 6px;
            border-bottom-right-radius: 6px;
            cursor: pointer;
            color: white;
            background-color: #f69c3b;

            &:hover {
                background-color: #d57917;
            }
        }

        input {
            width: 310px;
            border-radius: 0;
            padding: 5px;
            border: solid 1px gray;
            transition: all .2s ease;
            border-top-left-radius: 6px;
            border-bottom-left-radius: 6px;
            font-size: 1rem;
            color: #495057;
            background: #ffffff;
            padding: 0.75rem 0.75rem;
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