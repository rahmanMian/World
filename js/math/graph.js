class Graph{
    constructor(points =[], segments = []){
        this.points = points;
        this.segments = segments;
    }

    //points = nodes, segments = edges
    draw(ctx){
        for(const seg of this.segments){
            seg.draw(ctx);
        }
        //draw points after to make look better
        for(const points of this.points){
            points.draw(ctx);
        }
    }


}