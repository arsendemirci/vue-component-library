<template>
    <Teleport to="body">
        <div @keydown.esc="this.isOpen = false" @click="handleBackdropClick" v-if="isOpen" class="modal-mask">
            <div @click.stop class="modal-container" :class="[positionOptions[position], sizeOptions[size]], (animation) ? positionOptions[position] + '-animation' : ''">
                <p class="header">
                    <slot name="header">Header</slot> 
                </p>
                <section class="content">
                    <slot name="content">Content</slot>
                </section>
                <footer class="footer">
                    <button class="footer-btn"><slot name="footer-agree"></slot></button>
                    <button @click="closeModal" class="footer-btn"><slot name="footer-cancel"></slot></button>
                </footer>
            </div> 
        </div>  
    </Teleport>

    <button @click="openModal">click</button>
</template>

<script>
    export default {
        el: "#modal",
        props: { 
            position: { type: String, default() { return "center" } }, 
            size: { type: String, default() { return "md" } }, 
            backdrop: { type: Boolean, default() { return false } },
            animation: { type: Boolean, default() { return true } },
        },
        data() {
            return {
                isOpen: false,
                positionOptions: {
                    top: "position-top",
                    right: "position-right",
                    bottom: "position-bottom",
                    left: "position-left",
                    center: "position-center"
                },
                sizeOptions: {
                    xs: "x-small",
                    sm: "small",
                    md: "medium",
                    lg: "large",
                    xl: "x-large"
                }
            }
        },
        mounted() {
            var _self = this;

                document.addEventListener('keydown', function (e) {
                    if (e.keyCode == 27) {
                        console.log(_self.isOpen);
                        _self.isOpen = false;
                    }
                })
        },
        methods: {
            openModal() {
                this.isOpen = true
            },  
            closeModal() {
                this.isOpen = false
            },
            handleBackdropClick() {
                this.backdrop ? this.isOpen = true : this.isOpen = false
            },
        }
    }
</script>

<style lang="scss" scoped>
.modal-mask {
    display: flex;
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 5;
    background-color: rgba(0, 0, 0, 0.3);
    transition: opacity 0.3s ease;
    perspective: 400px;

    .modal-container {
    width: palette-space(space-700);
    padding: palette-space(space-10);
    font-size: palette-font-size-level(7);
    border-radius: palette-radius-level(4);
    margin: auto;
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    background-color: palette-color-level(white, 100);
    z-index: 10;

    .header {
        padding: palette-space(space-5);
        font-weight: $font-weight-bold;
    }
    .content {
        padding: palette-space(space-5);
        color: palette-color-level(grey, 30);
        height: palette-space(space-100);
        overflow-y: scroll;
        
        &::-webkit-scrollbar-thumb {
            visibility: hidden;
        }
        
        &::-webkit-scrollbar {
            visibility: hidden;
        }

        &:hover {
            &::-webkit-scrollbar-thumb {
            visibility: visible;
        }
        
        &::-webkit-scrollbar {
            visibility: visible;
        }   
        }

        &::-webkit-scrollbar {
            width: palette-space(space-5) ;
        }

        &:hover {
            &::-webkit-scrollbar-track {
                box-shadow: inset 0 0 5px grey; 
                border-radius: palette-radius(radius-10);
            }
        }

        &::-webkit-scrollbar-thumb {
            background: palette-color-level(primary, 100); 
            border-radius: palette-radius(radius-10);

            &:hover {
                background: palette-color-level(red, 40);
            }
        }
    }
    
    .footer {
        padding: palette-space(space-5);
        text-align: end;

        .footer-btn {
            font-size: $font-size-h5;
            margin-left: palette-space(space-5);
            padding: palette-padding-level(8, 18);
            border: 1px solid transparent;
            border-radius: palette-radius-level(4); 
            background-color: palette-color-level(white, 100);
            color: palette-color-level(primary, 100);
            cursor: pointer;

            &:hover {
                background-color: palette-color-level(grey, 10);
            }
        }
        
    }
}
    // ----- COMPONENT POSITIONS -----
    .position-top {
        margin: auto;
        margin-top: palette-space(space-20);
    }
    .position-right {
        margin: auto;
        margin-right: palette-space(space-20);
    }
    .position-bottom {
        margin: auto;
        margin-bottom: palette-space(space-20);
    }
    .position-left {
        margin: auto;
        margin-left: palette-space(space-20);
    }

    // ----- COMPONENT SIZE -----
    .x-small {  
        width: palette-space(space-500);      
    }
    .small {        
        width: palette-space(space-600);
    }
    .medium {        
        width: palette-space(space-700);
    }
    .large {    
        width: palette-space(space-800);    
    }
    .x-large {        
        width: palette-space(space-1000);
    }
    // ----- COMPONENT ANIMATIONS -----

    .position-center-animation {
        animation-name: modal-center;
        animation-duration: 0.5s;
    }
    
    .position-top-animation {
        animation-name: modal-top;
        animation-duration: 0.5s;
    }
    .position-right-animation {
        animation-name: modal-right;
        animation-duration: 0.5s;
    }
    .position-bottom-animation {
        animation-name: modal-bottom;
        animation-duration: 0.5s;
    }
    .position-left-animation {
        animation-name: modal-left;
        animation-duration: 0.5s;
    }
    

    // ----- ANIMATIONS -----
    @keyframes modal-center {
        0% {
            transform: rotate3d(1, 0, 0, 45deg);
        }
        100% {
            transform: rotate3d(0, 0, 0, -45deg);
        }
    }

    @keyframes modal-top {
        0% {
            margin: auto;
            margin-top: -(palette-space(space-200));
        }
        
        100% {
            margin: auto;
            margin-top: palette-space(space-20);
        }
    }

    @keyframes modal-left {
        0% {
            margin: auto;
            margin-left: -(palette-space(space-700));
        }
        
        100% {
            margin: auto;
            margin-left: palette-space(space-20);
        }
    }

    @keyframes modal-right {
        0% {
            margin: auto;
            margin-right: -(palette-space(space-700));
        }
        
        100% {
            margin: auto;
            margin-right: palette-space(space-20);
        }
    }

    @keyframes modal-bottom {
        0% {
            margin: auto;
            margin-bottom: -(palette-space(space-200));
        }
        
        100% {
            margin: auto;
            margin-bottom: palette-space(space-20);
        }
    }
}
</style>