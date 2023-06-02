<template>
    <Teleport to="body">
        <div @click="closeModal" v-if="isOpen" class="modal-mask">
            <div @click.stop class="modal-container">
                <h2 class="header">
                    <slot name="header"></slot>
                </h2>
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
        data() {
            return {
                isOpen: false,
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
    width: palette-space(space-500);
    padding: palette-space(space-10);
    margin: auto;
    border-radius: palette-radius-level(4);
    box-shadow: rgba(0, 0, 0, 0.15) 0px 15px 25px, rgba(0, 0, 0, 0.05) 0px 5px 10px;
    background-color: palette-color-level(white, 100);
    z-index: 10;

    .header {
        font-size: $font-size-h2;
        padding: palette-space(space-5)
    }

    .content {
        padding: palette-space(space-5);
        color: palette-color-level(grey, 30);
        height: palette-space(space-80);
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
}
</style>