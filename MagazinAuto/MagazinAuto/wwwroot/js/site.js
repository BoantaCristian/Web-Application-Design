// Write your Javascript code.
app.controller('site', ['$scope', function ($scope) {
    $scope.title = 'titlu';
    $scope.products = [
        {
            name: 'item1',
            price: 19,
            pubdate: new Date('2014', '03', '08'),
            cover: 'img/turbo.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'item2',
            price: 8,
            pubdate: new Date('2013', '08', '01'),
            cover: 'img/turbo.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'item3',
            price: 11.99,
            pubdate: new Date('1999', '07', '08'),
            cover: 'img/turbo.jpg',
            likes: 0,
            dislikes: 0
        },
        {
            name: 'item4',
            price: 7.99,
            pubdate: new Date('2011', '08', '16'),
            cover: 'img/turbo.jpg',
            likes: 0,
            dislikes: 0
        }
    ];
    $scope.plusOne = function (index) {
        $scope.products[index].likes += 1;
    },
        $scope.minusOne = function (index) {
            $scope.products[index].dislikes += 1;
        }
}]);