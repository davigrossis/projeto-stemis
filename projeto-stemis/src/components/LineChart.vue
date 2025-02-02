<template>
  <div class="chart-container">
    <Line v-if="chartData" :data="chartData" :options="chartOptions" />
  </div>
</template>

<script>
import { defineComponent, computed } from "vue";
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale
);

export default defineComponent({
  name: "LineChart",
  components: { Line },
  props: {
    dados: {
      type: Array,
      default: () => [],
    },
  },
  setup(props) {
    const chartData = computed(() =>
      props.dados.length //AREÁ COM TROCA DE CORES E TITULOS DO GRAFICO
        ? {
            labels: props.dados.map((item) => item.data),
            datasets: [
              {
                label: "Variação de Valor",
                data: props.dados.map((item) => item.preco),
                borderColor: "#42A5F5",
                backgroundColor: "rgba(66, 165, 245, 0.2)",
                fill: true,
                tension: 0.4,
              },
            ],
          }
        : null
    );

    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        x: { title: { display: true, text: "Data" } },
        y: { title: { display: true, text: "Preço (USD)" } },
      },
    };

    return { chartData, chartOptions };
  },
});
</script>

<style scoped>
.chart-container {
  width: 100%;
  height: 70vh;
  max-height: 600px;
}
</style>
