#include <stdio.h>

// 定数の定義
#define MAX_NUMBERS 100

// 関数プロトタイプ
void print_instructions();
int get_numbers(int numbers[], int max);
int find_maximum(int numbers[], int count);
int find_minimum(int numbers[], int count);
int calculate_sum(int numbers[], int count);
float calculate_average(int sum, int count);

int main() {
  int numbers[MAX_NUMBERS];  // ユーザーが入力する数値の配列
  int count;                 // 実際に入力された数の個数
  int max_value, min_value;  // 最大値と最小値
  int sum;                   // 合計
  float average;             // 平均値

  // プログラムの説明を表示
  print_instructions();

  // 数値を取得
  count = get_numbers(numbers, MAX_NUMBERS);

  // 結果を計算し表示
  if (count > 0) {
    max_value = find_maximum(numbers, count);
    min_value = find_minimum(numbers, count);
    sum = calculate_sum(numbers, count);
    average = calculate_average(sum, count);

    printf("\n結果:\n");
    printf("入力された数値の最大値: %d\n", max_value);
    printf("入力された数値の最小値: %d\n", min_value);
    printf("入力された数値の合計: %d\n", sum);
    printf("入力された数値の平均: %.2f\n", average);
  } else {
    printf("有効な数値が入力されませんでした。\n");
  }

  return 0;
}

// プログラムの説明を表示
void print_instructions() {
  printf("このプログラムは、整数のリストを入力して統計情報を計算します。\n");
  printf("最大 %d 個の整数を入力できます。\n", MAX_NUMBERS);
  printf("負の値を入力すると入力が終了します。\n\n");
}

// 数値を取得する
int get_numbers(int numbers[], int max) {
  int count = 0;
  int value;

  printf("整数を入力してください（負の値で終了）:\n");
  while (count < max) {
    printf("数値 %d: ", count + 1);
    scanf("%d", &value);

    if (value < 0) {
      break;
    }

    numbers[count] = value;
    count++;
  }
  return count;
}

// 最大値を求める
int find_maximum(int numbers[], int count) {
  int max = numbers[0];
  for (int i = 1; i < count; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// 最小値を求める
int find_minimum(int numbers[], int count) {
  int min = numbers[0];
  for (int i = 1; i < count; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// 合計を計算する
int calculate_sum(int numbers[], int count) {
  int sum = 0;
  for (int i = 0; i < count; i++) {
    sum += numbers[i];
  }
  return sum;
}

// 平均を計算する
float calculate_average(int sum, int count) { return (float)sum / count; }
