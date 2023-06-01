<template>
    <div class="modal-container">
        <h2 class="header">
            <slot name="header"></slot>
        </h2>
        <section class="content">
            <slot name="content"></slot>
        </section>
        <footer class="footer">

            <button class="footer-btn"><slot name="footer">Agree</slot></button>
            <button class="footer-btn"><slot name="footer">Cancel</slot></button>
        </footer>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.modal-container {
    width: palette-space(space-500);
    padding: palette-space(space-10);
    margin: 0 auto;
    background-color: palette-color-level(grey-90, 100);
    border: 1px solid palette-color-level(primary-dark-alt, 100);
    border-radius: palette-radius-level(4);
    
    .header {
        font-size: $font-size-h2;
        padding: palette-space(space-5)
    }

    .content {
        padding: palette-space(space-5);
        color: palette-color-level(grey, 30);
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
            // font-weight: bold;
            cursor: pointer;
        }

        .footer-btn:hover {
            background-color: palette-color-level(grey, 10);
            
        }
        
    }
}
</style>