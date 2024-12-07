#include <stdio.h>
#include <stdlib.h>
#include <time.h>

#define MIN 1
#define MAX 100

// ヒントを表示する関数
void display_hint(int guess, int answer)
{
    if (guess < answer)
    {
        printf("もっと大きな数字です。\n");
    }
    else if (guess > answer)
    {
        printf("もっと小さな数字です。\n");
    }
}

// 正解メッセージを表示する関数
void display_success(int attempts)
{
    printf("正解です！ %d回で正解しました！\n", attempts);
}

// 数当てゲームを実行する関数
void play_game()
{
    int answer, guess, attempts = 0;

    // 乱数の初期化
    srand((unsigned int)time(0));
    answer = rand() % (MAX - MIN + 1) + MIN; // MIN～MAXの乱数生成

    printf("数当てゲームを始めます！%d～%dの範囲で数字を入力してください。\n", MIN, MAX);

    while (1)
    {
        printf("あなたの予想: ");
        scanf("%d", &guess);

        if (guess < MIN || guess > MAX)
        {
            printf("範囲外の値です。%d～%dの間で入力してください。\n", MIN, MAX);
            continue;
        }

        attempts++;
        if (guess == answer)
        {
            display_success(attempts);
            break;
        }
        else
        {
            display_hint(guess, answer);
        }
    }
}

// メイン関数
int main()
{
    char choice;

    printf("数当てゲームへようこそ！\n");

    do
    {
        play_game();
        printf("もう一度プレイしますか？ (y/n): ");
        scanf(" %c", &choice); // 空白で前の入力バッファを除去
    } while (choice == 'y' || choice == 'Y');

    printf("ゲームを終了します。遊んでくれてありがとうございました！\n");
    return 0;
}
