<route lang="yaml">
  meta:
    layout: main
</route>

<template>
  <div class="vacancies__wrapper">
    <div class="vacancies__container-header">
      <span>Актуальные вакансии</span>
      <span class="title-box">Вакансии</span>
      <span class="description-box">Чтоб находить вакансии в списках на данной странице, нужно заполнить данные для Справочников и Матриц</span>
    </div>
    <div class="vacancies__table">
      <div class="vacancies__table-toolbar">
        <a-input-search
          placeholder="Введите текст"
          style="width: 20%"
        />
        <a-button :disabled="addNewVacancy" class="vacancies__table-button" type="primary" v-if="!selectedRows.length" @click="addNewVacancy = true">
          <template #icon>
            <PlusOutlined />
          </template>
          Добавить новую
        </a-button>
        <div class="vacancies__table-selected" v-else>
          <a-button :style="{color: '#22A1FC'}">
            Удалить
          </a-button>
          <a-button :style="{color: '#22A1FC'}">
            Назначить ответственного
          </a-button>
          <a-button :style="{color: '#fff', background: '#22A1FC'}">
            <template #icon>
              <SendOutlined />
            </template>
            Опубликовать выбранное
          </a-button>
        </div>  
      </div>
      <a-table
        bordered sticky
        :pagination="false"
        :columns="columns"
        :data-source="data"
        :row-selection="rowSelection"
        :row-class-name="(_record, index) => tableRowHandle(_record)"
      >
        <template #summary v-if="addNewVacancy">
          <a-table-summary fixed="top">
            <a-table-summary-row>
              <a-table-summary-cell :index="0">
              </a-table-summary-cell>
              <a-table-summary-cell :index="1"><a-input size="small" v-model:value="formAddNewVacancy.company" placeholder="Company" /></a-table-summary-cell>
              <a-table-summary-cell :index="2"><a-input size="small" v-model:value="formAddNewVacancy.position" placeholder="Position" /></a-table-summary-cell>
              <a-table-summary-cell :index="3"><a-input size="small" v-model:value="formAddNewVacancy.vessel" placeholder="Vessel" /></a-table-summary-cell>
              <a-table-summary-cell :index="4"><a-date-picker size="small" placeholder="Joining" v-model:value="joining" /></a-table-summary-cell>
              <a-table-summary-cell :index="5"><a-input size="small" v-model:value="formAddNewVacancy.wage" placeholder="Wage" /></a-table-summary-cell>
              <a-table-summary-cell :index="6"><a-input size="small" v-model:value="formAddNewVacancy.doc" placeholder="DOC" /></a-table-summary-cell>
              <a-table-summary-cell :index="7"><a-input size="small" v-model:value="formAddNewVacancy.remark" placeholder="" /></a-table-summary-cell>
              <a-table-summary-cell :index="8">
                <a-button size="small" shape="circle" :style="{color: '#22A1FC'}">
                  <template #icon>
                    <UserAddOutlined />
                  </template>
                </a-button>
              </a-table-summary-cell>
              <a-table-summary-cell :index="9"></a-table-summary-cell>
              <a-table-summary-cell :index="10">
                <a-button size="small" shape="round" :style="{color: '#fff', background: '#22A1FC'}" @click="createNewVacancy">
                  Сохранить
                </a-button>
                <a-button size="small" shape="circle" @click="removeNewForm">
                  <template #icon>
                    <CloseOutlined :style="{color: '#8C8C8C'}" />
                  </template>
                </a-button>
              </a-table-summary-cell>
            </a-table-summary-row>
          </a-table-summary>
        </template>
        <template #bodyCell="{ column, text }" :class="{'vacancies__table-oulined': text.idcardOutlined}">
          <template v-if="column.dataIndex === 'company'">
            <a @click.prevent="() => console.log('link')">{{ text }}</a>
          </template>
          <template v-if="column.dataIndex === 'vessel'">
            <a @click.prevent="() => console.log('link')">{{ text }}</a>
          </template>
          <template v-if="column.dataIndex === 'assignee' && text">
            <a-avatar style="background-color: #f56a00">{{ text[0] }}</a-avatar>
          </template>
          <template v-if="column.dataIndex === 'joining'">
            <a-tag color="pink" v-if="text === 'Asap'">{{ text }}</a-tag>
          </template>
          <template v-if="column.dataIndex === 'posting' && !text">
            <a-button class="vacancies__table-button" type="primary" shape="circle">
              <template #icon>
                <SendOutlined />
              </template>
            </a-button>
          </template>
          <template v-if="column.dataIndex === 'actions'" class="vacancies__table-actions">
            <a-button shape="circle" :class="{'vacancies__table-button_action': text.idcardOutlined}" @click="text.idcardOutlined = !text.idcardOutlined">
              <template #icon>
                <IdcardOutlined :style="{color: '#8C8C8C'}" />
              </template>
            </a-button>
            <a-button  shape="circle" :class="{'vacancies__table-button_action': text.fireOutlined}" @click="text.fireOutlined = !text.fireOutlined">
              <template #icon>
                <FireOutlined :style="{color: '#8C8C8C'}" />
              </template>
            </a-button>
            <a-button shape="circle" type="text">
              <template #icon>
                <MoreOutlined :style="{color: '#22A1FC'}" />
              </template>
            </a-button>
          </template>
        </template>
      </a-table>
      <div class="infinite-scroll_spin">
        <a-spin v-if="isLoading" />
      </div>
      <InfiniteScroll @intersect="fetchDataTable" />
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import mockTable from './mock-table'

export default {
    setup() {
      const columns = ref([
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',
          filters: []
        },
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position',
          filters: []
        },
        {
          title: 'Vessel',
          dataIndex: 'vessel',
          key: 'vessel',
          filters: [],
          width: '13%'
        },
        {
          title: 'Joining',
          dataIndex: 'joining',
          key: 'joining',
          filters: [],
          width: '10%'
        },
        {
          title: 'Wage',
          dataIndex: 'wage',
          key: 'wage',
          filters: []
        },
        {
          title: 'DOC',
          dataIndex: 'doc',
          key: 'doc',
          filters: [],
          width: '5%'
        },
        {
          title: 'Remark',
          dataIndex: 'remark',
          key: 'remark',
          filters: []
        },
        {
          title: 'Assignee',
          dataIndex: 'assignee',
          key: 'assignee',
          filters: []
        },
        {
          title: 'Posting',
          dataIndex: 'posting',
          key: 'posting',
          filters: []
        },
        {
          title: '',
          dataIndex: 'actions',
          key: 'actions',
        },
      ]);
      const data = ref([]);
      const addNewVacancy = ref(false);
      const isLoading = ref(false);
      const selectedRows = ref([]);
      const formAddNewVacancy = ref({
        company: '',
        position: '',
        vessel: '',
        joining: '',
        wage: '',
        doc: '',
        remark: '',
        assignee: [],
      })
      const rowSelection = ref({
        checkStrictly: false,
        onChange: (selectedRowKeys, selected) => {
          selectedRows.value = selected
        }
      });

      const removeNewForm = () => {
        addNewVacancy.value = false
        formAddNewVacancy.value = {
          company: '',
          position: '',
          vessel: '',
          joining: '',
          wage: '',
          doc: '',
          remark: '',
          assignee: [],
        }
      }

      const fetchDataTable = () => {
        isLoading.value = true
        setTimeout(() => {
          data.value.push(...mockTable)
          isLoading.value = false
        }, 1000)
      }

      const createNewVacancy = () => {
        addNewVacancy.value = false
        formAddNewVacancy.value = {
          company: '',
          position: '',
          vessel: '',
          joining: '',
          wage: '',
          doc: '',
          remark: '',
          assignee: [],
        }
      }

      const tableRowHandle = (record) => {
        const styleArray = []
        if (record.actions.idcardOutlined && record.actions.fireOutlined) {
          styleArray.push('vacancies__table-both')
        } else if (record.actions.fireOutlined) {
          styleArray.push('vacancies__table-oulined')
        } else if (record.actions.idcardOutlined) {
          styleArray.push('vacancies__table-idcard')
        }
        return styleArray.join(' ')
      }

      return {
        rowSelection,
        data,
        fetchDataTable,
        columns,
        addNewVacancy,
        tableRowHandle,
        selectedRows,
        removeNewForm,
        createNewVacancy,
        isLoading,
        formAddNewVacancy
      }
  }
}
</script>
<style lang="scss">
.vacancies {
  &__wrapper {
    font-family: 'Roboto', sans-serif;
    background-color: #F6F9FF;
    height: 100%;
  }

  &__container {
    &-header {
      display: flex;
      flex-direction: column;
      gap: 6px;
      padding: 25px;
      margin-right: 25px;
      background-color: #fff;

      .title-box {
        font-size: 20px;
        font-weight: 500;
        padding-top: 6px;
      }
      .description-box {
        font-size: 16px;
      }
    }
  }

  &__table {
    padding: 0px 25px 35px 25px;

    &-idcard {
      background-color: #E6FFFB;
    }
    &-oulined {
      background-color: #FFFBE6;
    }
    &-both {
      background-color: #F6FFED;
    }
    &-toolbar {
      display: flex;
      justify-content: space-between;
      padding: 16px 8px;
    }
    &-selected {
      display: flex;
      justify-content: flex-end;
      gap: 8px;
    }
    &-button {
      width: 165px;
      background: #22A1FC;
      &_action {
        background: #2EE9A8;
      }
    }

    .ant-table-cell {
      font-family: 'Roboto', sans-serif;
      padding: 4px 8px !important;
    }
    .ant-table-tbody {
      .ant-table-cell:last-child {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
      .ant-table-cell:nth-child(5) {
        font-size: 12px;
      }
    }

    .ant-table-summary {
      .ant-table-cell:last-child {
        display: flex;
        justify-content: space-between;
        width: 100%;
      }
    }

    .ant-table-filter-column {
      font-weight: 500;
    }

    .ant-table-row {
      height: 32px !important;
    }
  }
}
.infinite-scroll_spin {
  display: flex;
  width: 100%;
  height: 60px;
  justify-content: center;
  align-items: center;
}
</style>