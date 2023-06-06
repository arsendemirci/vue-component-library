<template>
    <Teleport to="body">
        <div @click="closeModal" v-if="isOpen" class="modal-mask">
            <div @click.stop class="modal-container" :class="[positionOptions[position], sizeOptions[size]]">
                <p class="header">
                    <slot name="header"></slot>
                </p>
                <section class="content">
                    <slot name="content"></slot>
                </section>
                <footer class="footer">
                    
                    <button class="footer-btn"><slot name="footer">Agree</slot></button>
                    <button @click="closeModal" class="footer-btn"><slot name="footer">Cancel</slot></button>
                </footer>
            </div> 
        </div>  
    </Teleport>

    <button @click="openModal">click</button>
</template>

<script>
    export default {
        el: "#modal",
        props: ["position", "size"],
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
                    lg: "large",
                    xl: "x-large"
                }
            }
        },
        methods: {
            openModal() {
                this.isOpen = true
            },  
            closeModal() {
                this.isOpen = false
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
    // perspective:220px;

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
        overflow: auto;
        // scroll styling
        -ms-overflow-style: none;  
        scrollbar-width: none;
    }
    .content::-webkit-scrollbar { 
        display: none;
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

    .x-small {  
        width: palette-space(space-500);      
    }
    .small {        
        width: palette-space(space-600);
    }
    .large {    
        width: palette-space(space-800);    
    }
    .x-large {        
        width: palette-space(space-1000);
    }
}
</style>