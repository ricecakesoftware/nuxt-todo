<template>
  <v-container>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>TASKS</v-card-title>
          <v-simple-table>
            <template>
              <thead>
                <tr>
                  <th></th>
                  <th>TITLE</th>
                  <th>CONTENT</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for='task in tasks' :key='task.title'>
                  <td><v-simple-checkbox v-model='task.done'></v-simple-checkbox></td>
                  <td>{{ task.title }}</td>
                  <td>{{ task.content }}</td>
                </tr>
              </tbody>
            </template>
          </v-simple-table>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-card-title>INPUT</v-card-title>
          <v-form>
            <v-text-field label='TITLE' v-model='input.title' required></v-text-field>
            <v-textarea label='CONTENT' v-model='input.content' required></v-textarea>
            <v-btn color='primary'>更新</v-btn>
            <v-btn color='secondary'>リセット</v-btn>
          </v-form>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang='ts'>
import { Component, Prop, Vue } from 'nuxt-property-decorator'
import { Task } from '~/store/task'

@Component
export default class IndexComponent extends Vue {
  @Prop({
    default: [
      new Task(true, 'やること', 'その内容'),
      new Task(false, 'むーりー', 'でもせなあかん')
    ]
  })
  tasks!: Array<Task>

  @Prop({ default: new Task(false, '', '') })
  input!: Task
}
</script>

<style>
/* No styles. */
</style>
