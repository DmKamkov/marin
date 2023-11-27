<route lang="yaml">
  meta:
    layout: main
</route>

<template>
    <div class="positions-main">
        <a-table
            :columns="columns"
            :row-key="record => record.login.uuid"
            :data-source="dataSource"
            :pagination="pagination"
            :loading="loading"
            @change="handleTableChange"
        >
            <template #bodyCell="{ column, text }">
                <template
                    v-if="column.dataIndex === 'name'"
                >
                    {{ text.first }} {{ text.last }}
                </template>
            </template>
        </a-table>
    </div>
</template>

<script>
import { ref, watch } from 'vue';
import { useI18n } from 'vue-i18n';

export default {
    setup() {
        const { t, locale  } = useI18n();
        const columns = ref([]);

        const updateTableData = () => {
            columns.value = [
                {
                    title: t('positions.tableHead.position'),
                    dataIndex: 'position',
                    sorter: true,
                },
                {
                    title: t('positions.tableHead.stcw'),
                    dataIndex: 'stcw',
                    sorter: true,
                },
                {
                    title: t('positions.tableHead.department'),
                    dataIndex: 'department',
                    sorter: true,
                    filters: [
                        {
                            text: 'Griffindor',
                            value: 'griffindor',
                        },
                        {
                            text: 'Slizeren',
                            value: 'slizeren',
                        },
                    ],
                },
                {
                    title: t('positions.tableHead.abbreviation'),
                    dataIndex: 'abbreviation',
                },
            ];
        };

        updateTableData();

        watch(() => locale.value, () => {
            updateTableData();
        });

        return {
            columns,
        };
    },
}
</script>

<style lang="scss" scoped>
.positions-main {
    padding: 20px;
}
</style>