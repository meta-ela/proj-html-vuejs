<template>
    <div>
        <form class="row g-3 fw-light">
            <div class="col-6">
                <label for="Name">Name</label>
                <input type="text" class="form-control" id="Name" required>
            </div>
            <div class="col-6">
                <label for="Email">Email</label>
                <input type="email" class="form-control" id="Email" required>
            </div>
            <div class="col-6">
                <label for="Phone">Phone</label>
                <input type="number" class="form-control" id="Phone" required>
            </div>
            <div class="col-6">
                <label for="More-info">More Info</label>
                <select class="form-select form-control fw-light" aria-label="Default select example" id="More-info" required>
                    <option value="1">Main Services</option>
                    <option value="2">Logistical Procedure</option>
                    <option value="3">Feedback</option>
                    <option value="3">General info</option>
                </select>
            </div>
            <div class="col-12 mb-4">
                <label for="Textarea">Message</label>
                <textarea class="form-control" id="Textarea" rows="4" required></textarea>
            </div>
            <div class="col-12">
                <button class="btn_full">Send</button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: "TheForm",
}

</script>

<style lang="scss" scoped>

</style>