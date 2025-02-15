import { useLocalSearchParams } from 'expo-router';
import { StyleSheet, View, Text, TouchableOpacity, ScrollView } from 'react-native';
import Svg, { Circle, Path, G, Text as SvgText } from 'react-native-svg';
import { useState } from 'react';

export default function SeatSelection() {
  const { id } = useLocalSearchParams();
  const [selectedArea, setSelectedArea] = useState(null);

  const areas = [
    {
      id: 'P1',
      name: 'Premium North',
      details: 'Near Gate A • Easy access to premium lounges',
      price: 3250,
      color: '#00A699'
    },
    {
      id: 'P2',
      name: 'Premium Northeast',
      details: 'Near Gate B • Close to food court',
      price: 1500,
      color: '#00A699'
    },
    {
      id: 'P3',
      name: 'Premium Northwest',
      details: 'Near Gate C • Premium parking access',
      price: 1500,
      color: '#00A699'
    },
    {
      id: 'E1',
      name: 'East Stand Upper',
      details: 'Near Gate D • Family section',
      price: 1150,
      color: '#914669'
    },
    {
      id: 'E2',
      name: 'East Stand Lower',
      details: 'Near Gate E • Wheelchair accessible',
      price: 2300,
      color: '#914669'
    },
    {
      id: 'S1',
      name: 'South Stand',
      details: 'Near Gate F • Home supporters section',
      price: 2800,
      color: '#FF5A5F'
    },
    {
      id: 'S2',
      name: 'South Central',
      details: 'Near Gate G • Best view of action',
      price: 1150,
      color: '#FF5A5F'
    },
    {
      id: 'W1',
      name: 'West Stand Upper',
      details: 'Near Gate H • Away supporters section',
      price: 1150,
      color: '#BD6B73'
    },
    {
      id: 'W2',
      name: 'West Stand Lower',
      details: 'Near Gate I • Close to team tunnels',
      price: 1150,
      color: '#BD6B73'
    }
  ];

  const getArcPath = (startAngle, endAngle, radius, centerX, centerY) => {
    const start = polarToCartesian(centerX, centerY, radius, endAngle);
    const end = polarToCartesian(centerX, centerY, radius, startAngle);
    const largeArcFlag = endAngle - startAngle <= 180 ? 0 : 1;
    return [
      'M', start.x, start.y,
      'A', radius, radius, 0, largeArcFlag, 0, end.x, end.y
    ].join(' ');
  };

  const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Select Your Seats</Text>
      
      <View style={styles.stadiumContainer}>
        <Svg height="400" width="100%" viewBox="0 0 400 400">
          {/* Field */}
          <Circle
            cx="200"
            cy="200"
            r="60"
            fill="#1a472a"
            stroke="#fff"
            strokeWidth="2"
          />
          
          {/* Sections */}
          <G transform="translate(200, 200)">
            {/* Premium North */}
            <Path
              d={`M -100,0 A 100,100 0 0,1 100,0`}
              fill={selectedArea === 'P1' ? '#00A699' : '#007A71'}
              opacity="0.8"
              onPress={() => setSelectedArea('P1')}
            />
            
            {/* Premium Northeast */}
            <Path
              d={`M 70,-70 A 100,100 0 0,1 100,0`}
              fill={selectedArea === 'P2' ? '#00A699' : '#007A71'}
              opacity="0.8"
              onPress={() => setSelectedArea('P2')}
            />
            
            {/* Premium Northwest */}
            <Path
              d={`M -100,0 A 100,100 0 0,1 -70,-70`}
              fill={selectedArea === 'P3' ? '#00A699' : '#007A71'}
              opacity="0.8"
              onPress={() => setSelectedArea('P3')}
            />
            
            {/* East Stand */}
            <Path
              d={`M 100,0 A 100,100 0 0,1 70,70`}
              fill={selectedArea === 'E1' ? '#914669' : '#6B3A4E'}
              opacity="0.8"
              onPress={() => setSelectedArea('E1')}
            />
            
            <Path
              d={`M 70,70 A 100,100 0 0,1 0,100`}
              fill={selectedArea === 'E2' ? '#914669' : '#6B3A4E'}
              opacity="0.8"
              onPress={() => setSelectedArea('E2')}
            />
            
            {/* South Stand */}
            <Path
              d={`M 0,100 A 100,100 0 0,1 -70,70`}
              fill={selectedArea === 'S1' ? '#FF5A5F' : '#CC4850'}
              opacity="0.8"
              onPress={() => setSelectedArea('S1')}
            />
            
            <Path
              d={`M -35,85 A 100,100 0 0,1 35,85`}
              fill={selectedArea === 'S2' ? '#FF5A5F' : '#CC4850'}
              opacity="0.8"
              onPress={() => setSelectedArea('S2')}
            />
            
            {/* West Stand */}
            <Path
              d={`M -70,70 A 100,100 0 0,1 -100,0`}
              fill={selectedArea === 'W1' ? '#BD6B73' : '#8B4F55'}
              opacity="0.8"
              onPress={() => setSelectedArea('W1')}
            />
            
            <Path
              d={`M -70,-70 A 100,100 0 0,1 -70,70`}
              fill={selectedArea === 'W2' ? '#BD6B73' : '#8B4F55'}
              opacity="0.8"
              onPress={() => setSelectedArea('W2')}
            />
          </G>

          {/* Section Labels */}
          <G>
            <SvgText x="185" y="80" fill="#fff" fontSize="10" textAnchor="middle">North</SvgText>
            <SvgText x="320" y="200" fill="#fff" fontSize="10" textAnchor="middle">East</SvgText>
            <SvgText x="185" y="320" fill="#fff" fontSize="10" textAnchor="middle">South</SvgText>
            <SvgText x="80" y="200" fill="#fff" fontSize="10" textAnchor="middle">West</SvgText>
          </G>
        </Svg>
      </View>

      <View style={styles.legendContainer}>
        {areas.map((area) => (
          <TouchableOpacity
            key={area.id}
            style={[
              styles.legendItem,
              selectedArea === area.id && styles.legendItemSelected,
            ]}
            onPress={() => setSelectedArea(area.id)}
          >
            <View style={[styles.legendColor, { backgroundColor: area.color }]} />
            <View style={styles.legendInfo}>
              <Text style={styles.legendText}>{area.name}</Text>
              <Text style={styles.legendDetails}>{area.details}</Text>
              <Text style={styles.legendPrice}>₹{area.price}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity
        style={[
          styles.continueButton,
          !selectedArea && styles.continueButtonDisabled,
        ]}
        disabled={!selectedArea}
      >
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 24,
  },
  stadiumContainer: {
    backgroundColor: '#1E1E1E',
    padding: 16,
    borderRadius: 16,
    marginBottom: 32,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  legendContainer: {
    marginBottom: 32,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#1E1E1E',
    borderRadius: 8,
    marginBottom: 8,
  },
  legendItemSelected: {
    borderColor: '#2EFF2E',
    borderWidth: 2,
  },
  legendColor: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 12,
  },
  legendInfo: {
    flex: 1,
  },
  legendText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  legendDetails: {
    color: '#888',
    fontSize: 14,
    marginBottom: 4,
  },
  legendPrice: {
    color: '#2EFF2E',
    fontSize: 16,
    fontWeight: 'bold',
  },
  continueButton: {
    backgroundColor: '#2EFF2E',
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 32,
  },
  continueButtonDisabled: {
    backgroundColor: '#1E1E1E',
    opacity: 0.5,
  },
  continueButtonText: {
    color: '#000',
    fontSize: 18,
    fontWeight: 'bold',
  },
});