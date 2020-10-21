<template>
  <div>
    <v-card
      color="pink darken-4"
      class="mx-auto"
      width="600"
      height="900"
      outlined
    >
      <h1 align="center">สำนักข่าวโจโจ้มหาชน</h1>
      <v-col>
        <h3>ข่าววันนี้</h3>
        <v-text-field v-model="head" name="input-10-1" label="หัวข้อข่าว">
        </v-text-field>
      </v-col>
      <v-col>
        <h3>วันที่</h3>
        <v-text-field v-model="Day" name="input-10-1" label="วัน/เดือน/ปี">
        </v-text-field>
      </v-col>
      <v-col>
        <h3>ข้อมูลเพิ่มเติม</h3>
        <v-textarea v-model="detail" name="input-10-1" label="รายละเอียด">
        </v-textarea>
      </v-col>
      <v-col>
        <h3>แหล่งที่ตั้ง</h3>
        <v-text-field v-model="add" name="input-10-1" label="สถานที่">
        </v-text-field>
      </v-col>
      <v-col>
        <h3>รูปภาพ</h3>
        <v-file-input v-model="fileImage" show-size label="แนบรูป">
        </v-file-input>
      </v-col>
      <v-col>
        <v-btn
          block
          elevation="2"
          large
          x-small
          color="brown darken-2"
          @click="validate"
        >
          ตกลง
        </v-btn>
      </v-col>
      <v-col>
        <v-btn
          block
          elevation="2"
          large
          x-small
          color="brown darken-4"
          @click="reset"
        >
          ยกเลิก
        </v-btn>
      </v-col>
    </v-card>
  </div>
</template>

<script>
import firebase from 'firebase/app'
export default {
  data() {
    return {
      fileImage: null,
    }
  },
  methods: {
    validate() {
      // 1.ข้อมูล -- clound firestore
      // 2.รูป --- storage
      // File or Blob named mountains.jpg
      const file = this.fileImage
      const storageRef = firebase.storage().ref()

      // Create the file metadata
      const metadata = {
        contentType: 'image/jpeg',
      }

      // Upload file and metadata to the object 'images/mountains.jpg'
      const uploadTask = storageRef
        .child('images/' + file.name)
        .put(file, metadata)

      // Listen for state changes, errors, and completion of the upload.
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED, // or 'state_changed'
        (snapshot) => {
          // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          // A full list of error codes is available at
          // https://firebase.google.com/docs/storage/web/handle-errors
          switch (error.code) {
            case 'storage/unauthorized':
              // User doesn't have permission to access the object
              break

            case 'storage/canceled':
              // User canceled the upload
              break

            case 'storage/unknown':
              // Unknown error occurred, inspect error.serverResponse
              break
          }
          console.log('error= ' + error)
        },
        function () {
          // Upload completed successfully, now we can get the download URL
          uploadTask.snapshot.ref.getDownloadURL().then(function (downloadURL) {
            console.log('File available at', downloadURL)
          })
        }
      )
    },
  },
}
</script>

<style></style>
