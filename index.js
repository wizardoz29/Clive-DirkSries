(function(){

    var app = angular.module("myapp",[]);
  
  
    let bookfunc = function($scope){
     $scope.ex1 = "Dirk Pitt, death-defying adventurer and deep-sea expert, is out to the ultimate test as he plunges into the perilous waters of the Pacific Vortex; a fog-shrouded sea zone where dozens of ships have vanished without a trace. The latest victim is the awesome superb Starbuck, America's deep-diving nuclear arsenal. Its loss poses an unthinkable threat to national defense. Pitt's job is to find it, salvage it, before the sea explodes. In a furious race against time, Pitt's mission swirls him into a battle with underwater assassins and traps him in the arms of Summer Moran, the most stunningly exotic and dangerous lady he has ever met." 
     $scope.ex2 = "On an isolated Greek island, a World War I fighter plane attacks a modern U.S. Air Force base--a mysterious saboteur preys on an American scientific expedition--and Dirk Pitt plays a deadly game of hunter and hunted with the elusive head of an international smuggling ring."
     $scope.ex3 = "Frozen inside a million-ton mass of ice-the charred remains of a long missing luxury yacht, vanished en route to a secret White House rendezvous.  The only clue to the ship's priceless-and missing-cargo: nine ornately carved rings and the horribly burned bodies of its crew."
     $scope.ex4 = "The President's secret task force has developed an unprecedented defensive weapon that relies on an extremely rare radioactive element--and Dirk Pitt has followed a twisted trail to a secret cache of the substance. Now, racing against brutal storms, Soviet spies, and a ticking clock, Pitt begins his most thrilling mission--to raise from its watery grave the shipwreck of the century."
     $scope.ex5 = "In 1954, Vixen 03 went down. The plane, bound for the Pacific carrying thirty-six Doomsday bombs — canisters armed with quick-death germs of unbelievable potency — vanishes. Vixen has in fact crashed into an ice-covered lake in Colorado. In 1988, Dirk Pitt, who heroically raised the Titanic, discovers the wreckage of Vixen 03. But two deadly canisters are missing. They're in the hands of a terrorist group. Their lethal mission: to sail a battleship seventy-five miles up the Potomac and blast Washington, D.C., to kingdom come. Only Dirk can stop them."

    };
  
      app.controller("bcard", bookfunc)
    
  }())