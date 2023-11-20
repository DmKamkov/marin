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
          v-model:value="searchValue"
          placeholder="Введите текст"
          style="width: 250px"
          @search="onSearch"
        />
        <a-button class="vacancies__table-button" type="primary" :size="size">
          <template #icon>
            <PlusOutlined />
          </template>
          Добавить новую
        </a-button>
      </div>
      <a-table :columns="columns" :data-source="data" :row-selection="rowSelection">
      <template #bodyCell="{ column, text }">
        <template v-if="column.dataIndex === 'company'">
          <a @click.prevent="() => console.log('link')">{{ text }}</a>
        </template>
        <template v-if="column.dataIndex === 'vessel'">
          <a @click.prevent="() => console.log('link')">{{ text }}</a>
        </template>
        <template v-if="column.dataIndex === 'joining'">
          <a-tag v-if="text === 'Asap'" color="red">{{ text }}</a-tag>
        </template>
        <template v-if="column.dataIndex === 'posting' && !text">
          <a-button class="vacancies__table-button" type="primary" shape="circle">
            <template #icon>
              <SendOutlined />
            </template>
          </a-button>
        </template>
        <template v-if="column.dataIndex === 'actions'" class="vacancies__table-actions">
          <a-button shape="circle" class="vacancies__table-button_action" v-if="text.idcardOutlined">
            <template #icon>
              <IdcardOutlined />
            </template>
          </a-button>
          <a-button shape="circle" v-else>
            <template #icon>
              <IdcardOutlined />
            </template>
          </a-button>
          <a-button shape="circle" class="vacancies__table-button_action" v-if="text.fireOutlined">
            <template #icon>
              <FireOutlined />
            </template>
          </a-button>
          <a-button shape="circle" v-else>
            <template #icon>
              <FireOutlined />
            </template>
          </a-button>
        </template>
      </template>
      </a-table>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import mockTable from './mock-table'

export default {
    setup() {
      const columns = ref([
        {
          title: 'Company',
          dataIndex: 'company',
          key: 'company',
        },
        {
          title: 'Position',
          dataIndex: 'position',
          key: 'position',
        },
        {
          title: 'Vessel',
          dataIndex: 'vessel',
          key: 'vessel',
        },
        {
          title: 'Joining',
          dataIndex: 'joining',
          key: 'joining',
        },
        {
          title: 'Wage',
          dataIndex: 'wage',
          key: 'wage',
        },
        {
          title: 'DOC',
          dataIndex: 'doc',
          key: 'doc',
        },
        {
          title: 'Remark',
          dataIndex: 'remark',
          key: 'remark',
        },
        {
          title: 'Assignee',
          dataIndex: 'assignee',
          key: 'assignee',
        },
        {
          title: 'Posting',
          dataIndex: 'posting',
          key: 'posting',
        },
        {
          title: '',
          dataIndex: 'actions',
          key: 'actions',
          width: '120px'
        },
      ]);
      const data = ref(mockTable);
      const rowSelection = ref({
        checkStrictly: false,
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
        },
        onSelect: (record, selected, selectedRows) => {
          console.log(record, selected, selectedRows);
        },
        onSelectAll: (selected, selectedRows, changeRows) => {
          console.log(selected, selectedRows, changeRows);
        },
      });

      return {
        rowSelection,
        data,
        columns
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
    padding: 0px 25px;
    &-toolbar {
      display: flex;
      justify-content: space-between;
      padding: 16px 8px;
    }
    &-button {
      width: 165px;
      background: #22A1FC;
      &_action {
        background: #2EE9A8;
      }
    }
    &-actions {
      display: flex;
      width: 100%;
      gap: 15px;
    }

    .ant-table-row {
      height: 32px !important;
    }
  }
}
</style>